<?php

use Illuminate\Database\Seeder;
use App\Section;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $sections = [
                [
                'name' => 'Headings',
                ],
                [
                    'name' => 'State',
                        'children' => [
                                    [
                                        'name' => 'Global Assessment',
                                    ],
                                    [
                                        'name' => 'Level of Functioning',
                                    ],
                                    [
                                        'name' => 'Affective State',
                                    ],
                                    [
                                        'name' => 'Mental State',
                                    ],
                    ]
                ],
                                [
                                    'name' => 'Themes',
                                        'children' => [
                                                    [
                                                        'name' => 'Rational',
                                                    ],
                                                    [
                                                        'name' => 'Trauma',
                                                    ],
                                                    [
                                                        'name' => 'Identity',
                                                    ],
                                                    [
                                                        'name' => 'Process',
                                                    ],
                                                    [
                                                        'name' => 'Mouring / Loss',
                                                    ],
                                                    [
                                                        'name' => 'Adjustment',
                                                    ],
                                                    [
                                                        'name' => 'Daily LIfe',
                                                    ],
                                                    [
                                                        'name' => 'Specific Difficulties',
                                                    ],
                                    ]
                                ],
                                [
                                    'name' => 'Treatment',
                                        'children' => [
                                                    [
                                                        'name' => 'Supportive',
                                                    ],
                                                    [
                                                        'name' => 'Congnitive Behavioral',
                                                    ],
                                                    [
                                                        'name' => 'Psychoanalytic / Psychodynamic',
                                                    ],
                                                    [
                                                        'name' => 'Other Interventions',
                                                    ],
                                    ]
                                ],
                                [
                                    'name' => 'Progress',
                                        'children' => [
                                                    [
                                                        'name' => 'Significant Developments',
                                                    ],
                                                    [
                                                        'name' => 'Ongoing Treatment Plan',
                                                    ],
                                                    [
                                                        'name' => 'Outstanding Therapeutic Issues and Concerns',
                                                    ],
                                    ]
                                ],

                                [
                                    'name' => 'Section 1',
                                ],
                                [
                                    'name' => 'Section 2',
                                ],
                                [
                                    'name' => 'Section 3',
                                ],
                                [
                                    'name' => 'Section 4',
                                ],

                                [
                                    'name' => 'Intro',
                                ],
                                [
                                    'name' => 'Goals',
                                ],
                                [
                                    'name' => 'Plans',
                                ],

                                [
                                    'name' => 'Subjective',
                                ],
                                [
                                    'name' => 'Objective',
                                ],
                                [
                                    'name' => 'Assessment',
                                ],
                                [
                                    'name' => 'Plan',
                                ],
                                                                
        ];
        foreach($sections as $section)
        {
            Section::create($section);
        }

    }
}
