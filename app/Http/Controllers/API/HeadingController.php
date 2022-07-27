<?php

namespace App\Http\Controllers\API;

use App\Models\Heading;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HeadingController extends Controller
{
    /** @var int $successStatus */
    public $successStatus = 200;

    /**
     * @return JsonResponse
     */
    public function index()
    {
        $headings = Heading::all();
        return response()->json(['success' => $headings], $this->successStatus);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getHeadingsByType(Request $request): JsonResponse
    {
        $headings = DB::table('headings')->where('note_id', '=', $request->id)
            ->where('user_id', '=', Auth::user()->id)
            ->get();

        return response()->json(['success' => $headings], $this->successStatus);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function saveHeading(Request $request): JsonResponse
    {
        $data = [
            'note_id' => $request->note_id,
            'heading_text' => $request->heading_text,
            'heading_content' => $request->heading_content,
            'user_id' => Auth::user()->id
        ];
        $heading = Heading::create($data);
        $response = ['status' => 'success', 'msg' => 'Heading Created Successfully', 'data' => $heading];
        return response()->json(['success' => $response], 201);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function editHeading(Request $request, $id)
    {
        $option = Heading::findOrFail($id);
        $option->update([
            'heading_text' => $request->get('heading_text'),
            'heading_content' => $request->get('heading_content')
        ]);
        $response = ['status' => 'success', 'msg' => 'Heading Updated Successfully', 'data' => []];
        return response()->json($response, 200);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteHeadingById(Request $request, $id)
    {
        $heading = Heading::findOrFail($request->id);
        $heading->delete();
        $headings = Heading::all();
        return response()->json(['success' => $headings], 200);
    }
    public function allHeadings($note_id)
    {
        $user = Auth::user();
        $headings = Heading::where('user_id', $user->id)->where('note_id', $note_id)->get();
        return response()->json(['success' => $headings], 200);
    }
    public function our_backup_database()
    {
        //ENTER THE RELEVANT INFO BELOW
        $mysqlHostName      = env('DB_HOST');
        $mysqlUserName      = env('DB_USERNAME');
        $mysqlPassword      = env('DB_PASSWORD');
        $DbName             = env('DB_DATABASE');
        $backup_name        = "mybackup.sql";
        $tables             = array("failed_jobs", "headings", "migrations", "notes", "options", "password_resets", "personal_access_tokens", "questions", "sections", "users"); //here your tables...

        $connect = new \PDO("mysql:host=$mysqlHostName;dbname=$DbName;charset=utf8", "$mysqlUserName", "$mysqlPassword", array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
        $get_all_table_query = "SHOW TABLES";
        $statement = $connect->prepare($get_all_table_query);
        $statement->execute();
        $result = $statement->fetchAll();


        $output = '';
        foreach ($tables as $table) {
            $show_table_query = "SHOW CREATE TABLE " . $table . "";
            $statement = $connect->prepare($show_table_query);
            $statement->execute();
            $show_table_result = $statement->fetchAll();

            foreach ($show_table_result as $show_table_row) {
                $output .= "\n\n" . $show_table_row["Create Table"] . ";\n\n";
            }
            $select_query = "SELECT * FROM " . $table . "";
            $statement = $connect->prepare($select_query);
            $statement->execute();
            $total_row = $statement->rowCount();

            for ($count = 0; $count < $total_row; $count++) {
                $single_result = $statement->fetch(\PDO::FETCH_ASSOC);
                $table_column_array = array_keys($single_result);
                $table_value_array = array_values($single_result);
                $output .= "\nINSERT INTO $table (";
                $output .= "" . implode(", ", $table_column_array) . ") VALUES (";
                $output .= "'" . implode("','", $table_value_array) . "');\n";
            }
        }
        $file_name = 'database_backup_on_' . date('y-m-d') . '.sql';
        $file_handle = fopen($file_name, 'w+');
        fwrite($file_handle, $output);
        fclose($file_handle);
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename=' . basename($file_name));
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file_name));
        ob_clean();
        flush();
        readfile($file_name);
        unlink($file_name);
    }
}
