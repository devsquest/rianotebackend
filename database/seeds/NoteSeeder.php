<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('notes')->insert([
            'name' => 'Basic Notes',
            'description' => '',
            'status' => 0,
        ]);
        DB::table('notes')->insert([
            'name' => 'Intake Notes',
            'description' => '',
            'status' => 0,
        ]);
        DB::table('notes')->insert([
            'name' => 'Treatment Plan',
            'description' => '',
            'status' => 0,
        ]);
        DB::table('notes')->insert([
            'name' => 'Termination Summary',
            'description' => '',
            'status' => 0,
        ]);
        DB::table('notes')->insert([
            'name' => 'Blank Notes',
            'description' => '',
            'status' => 0,
        ]);
        DB::table('notes')->insert([
            'name' => 'SOAP',
            'description' => '',
            'status' => 0,
        ]);
    }
}
