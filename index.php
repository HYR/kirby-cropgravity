<?php

Kirby::plugin('HYR/cropgravity', [
    'fields' => [
        'cropgravity' => [
            'props' => [
                'value' => function ($value = "center") {
                    return $value;
                },
                'options' => function() {
                    return [
                        "northwest",
                        "north",
                        "northeast",
                        "west",
                        "center",
                        "east",
                        "southwest",
                        "south",
                        "southeast"
                    ];
                }
            ],
            'computed' => [
                'image' => function() {

                    if($this->model()->type() == "image") {
                        return $this->model()->url();
                    }
                    else {
                        return false;
                    }
                },
            ]
        ]
    ]
]);