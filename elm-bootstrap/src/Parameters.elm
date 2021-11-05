module Parameters exposing (..)

import GraphicSVG exposing (..)

type Tabs 
  = Animation | Comics | Adventure | Mini | ThreeD | Sustainability | Picasso | Escher | Beethoven | Vaccine | MiniSaturdays

allCamps = [Animation, Comics, Adventure, Mini, ThreeD, Vaccine, Picasso, Escher, Beethoven, MiniSaturdays]

campList : List ((Int,Int),Tabs)
campList =
  [ ((8,0), Animation)
  , ((8,1), Picasso)
  , ((9,0), Comics)
  , ((9,1), Beethoven)
  , ((10,0), Adventure)
  , ((10,1), ThreeD)
  , ((11,0), Comics)
  , ((11,1), Mini)
  , ((12,0), Animation)
  , ((12,1), Adventure)
  , ((13,0), Vaccine)
  , ((13,1), Picasso)
  , ((14,0), ThreeD)
  , ((14,1), Beethoven)
  , ((15,0), Animation)
  , ((15,1), Escher)
  ]

camps = campList
  |> List.map ( \ (week,camp) -> (week, (name camp |> combineName, icon camp, gsvgColor camp)))
  
campDates ((idx,_),_) = 
    case idx of
        8 -> "July 5-9"
        9 -> "July 12-16"
        10 -> "July 19-23"
        11 -> "July 26-30"
        12 -> "Aug 3-7"
        13 -> "Aug 9-13"
        14 -> "Aug 16-20"
        _ -> "Aug 23-27"
lessons = List.concatMap weekOfLessons (List.range 0 6)

allLessons = [1,2,3,4,5,6,7,8,9,12,13]

freeClr = rgb 50 180 100

lessonClr num = 
  case num of
    5 -> hsl 3.5 1 0.4
    6 -> hsl 3.6 1 0.4
    7 -> hsl 3.9 1 0.4
    8 -> hsl 4.4 1 0.4
    9 -> hsl 4.7 1 0.4
    12 -> hsl 5.5 1  0.4
    13 -> hsl 6 1 0.4
    _ -> hsl 1 1 0.5


weekOfLessons wk = 
  [ ((wk,1,0),("L1+L2",freeClr))
  , ((wk,2,0),("L3+L4",freeClr))
  , ((wk,3,0),("L5",lessonClr 5))
  , ((wk,4,0),("L6",lessonClr 6))
  , ((wk,5,0),("L7",lessonClr 7))
  , ((wk,1,1),("L8",lessonClr 8))
  , ((wk,2,1),("L9",lessonClr 9))
  , ((wk,3,1),("L1+L2",freeClr))
  , ((wk,4,1),("L3+L4",freeClr))
  , ((wk,5,1),("Herogram",freeClr))
  ]

lessonName idx = case idx of
                    1 -> "Basic Drawing A"
                    2 -> "Basic Drawing B"
                    3 -> "Simple Animations"
                    4 -> "Advanced Drawing"
                    5 -> "Advanced Drawing Techniques"
                    6 -> "Puppet Show"
                    7 -> "Recursive Functions"
                    8 -> "State Diagrams & Adventure Games"
                    9 -> "Character Controls"
                    12 -> "Bootstrap Web Grids & Containers"
                    13 -> "Bootstrap Web Structure & Images"
                    _ -> "Error:  Does not compute!"

weekendLessons =
  [ (1,(("L1+L2",freeClr),("L3+L4",freeClr),("flashlight",gsvgColor Mini)))
  , (2,(("L5",lessonClr 5),("L6",lessonClr 6),("powerups",gsvgColor Mini)))
  , (3,(("L7",lessonClr 7),("L12",lessonClr 12),("falling",gsvgColor Mini)))
  , (4,(("L8",lessonClr 8),("L13",lessonClr 13),("flashlight",gsvgColor Mini)))
  , (5,(("L9",lessonClr 9),("L12",lessonClr 12),("powerups",gsvgColor Mini)))
  , (6,(("L12",lessonClr 12),("L13",lessonClr 13),("falling",gsvgColor Mini)))
  ]
 

combineName (a,b,c) = String.join " " [a, b, c]

htmColor : Tabs -> String
htmColor tab =
    let (r,g,b) = tabColor tab
    in "rgb("++String.fromFloat r++","++String.fromFloat g++","++String.fromFloat b++")" 

gsvgColor : Tabs -> Color
gsvgColor tab =
    let (r,g,b) = tabColor tab
    in rgb r g b

tabColor : Tabs -> (Float,Float,Float)
tabColor tab =
    case tab of
            Animation -> (191,17,46)
            Comics    -> (18,0,196)
            Adventure -> (11,98,27)
            Mini      -> (110, 36, 124) -- (174, 170, 0) -- (30, 106, 131) -- (146, 80, 39) -- (0,255,127)
            MiniSaturdays      -> (110, 36, 124) -- (174, 170, 0) -- (30, 106, 131) -- (146, 80, 39) -- (0,255,127)
            ThreeD    -> (245,94,60)
            Sustainability        -> (0,160,255)
            Vaccine   -> (0,160,255)
            Picasso   -> (122,69,247)
            Escher    -> (255,13,154)
            Beethoven -> (0,0,0)

name thisTab =
        case thisTab of
            Animation -> ("Animation","","Camp")
            Comics    -> ("Comics","","Camp")
            Adventure -> ("Adventure","","Camp")
            Mini      -> ("Mini-","Games","Camp")
            MiniSaturdays      -> ("Mini-","Games","Saturdays")
            ThreeD    -> ("Journey","into","3D")
            Sustainability        -> ("Design","","Thinking")
            Vaccine        -> ("Design","","Thinking")
            Picasso   -> ("Code","like","Picasso")
            Escher    -> ("Code","like","Escher")
            Beethoven -> ("Code","like","Beethoven")
    
icon tab =
    case tab of
        Animation -> animationIcon
        Comics    -> comicIcon
        Adventure -> group []
        Mini      -> gameIcon
        MiniSaturdays      -> gameIcon
        ThreeD    -> group []
        Sustainability        -> group [ ngon 4 10 |> outlined (solid 1) white |> move (-5,0), ngon 4 10 |> outlined (solid 1) white |> move (5,0)]
        Vaccine        -> group [ ngon 4 10 |> outlined (solid 1) white |> move (-5,0), ngon 4 10 |> outlined (solid 1) white |> move (5,0)]
        Picasso   -> group []
        Escher    -> group []
        Beethoven -> group []


comicIcon =
    group
        [ polygon [ ( -35, 40 ), ( 0, 35 ), ( 35, 40 ), ( 35, -5 ), ( 0, -10 ), ( -35, -5 ) ]
            |> filled white
            --|> filled (rgb 50 50 50),
            |> subtract
                (group
                    [ rect 1 44.5
                        |> filled white
                        |> move ( 0, 13 )
                    , bang
                        |> move ( 18, 17 )
                        |> scale 1.3
                    ]
                )
        ]
        |> scale 0.5
        |> move ( 0, -7 )
bang =
    group
        [ polygon [ ( 0, 10 ), ( 3, 0 ), ( -3, 0 ) ]
            |> filled (rgb 255 255 255)
        , polygon [ ( 0, 10 ), ( 3, 0 ), ( -3, 0 ) ]
            |> filled (rgb 255 255 255)
            |> rotate (degrees 51)
        , polygon [ ( 0, 10 ), ( 3, 0 ), ( -3, 0 ) ]
            |> filled (rgb 255 255 255)
            |> rotate (degrees 102)
        , polygon [ ( 0, 10 ), ( 3, 0 ), ( -3, 0 ) ]
            |> filled (rgb 255 255 255)
            |> rotate (degrees 153)
        , polygon [ ( 0, 10 ), ( 3, 0 ), ( -3, 0 ) ]
            |> filled (rgb 255 255 255)
            |> rotate (degrees 204)
        , polygon [ ( 0, 10 ), ( 3, 0 ), ( -3, 0 ) ]
            |> filled (rgb 255 255 255)
            |> rotate (degrees 255)
        , polygon [ ( 0, 10 ), ( 3, 0 ), ( -3, 0 ) ]
            |> filled (rgb 255 255 255)
            |> rotate (degrees 306)
        ]

gameIcon =
    group
        [ group
            [ rect 60 50
                |> filled white
            , circle 32
                |> filled white
                |> move ( 30, -7 )
            , circle 32
                |> filled white
                |> move ( -30, -7 )
            ]
            |> subtract
                (group
                    [ rect 20 8
                        |> filled (rgb 46 56 66)
                        |> move ( -32, -7 )
                    , rect 8 20
                        |> filled (rgb 46 56 66)
                        |> move ( -32, -7 )
                    , group
                        [ circle 5
                            |> filled (rgb 46 56 66)
                            |> move ( 25, 10 )
                        , circle 5
                            |> filled (rgb 46 56 66)
                            |> move ( 25, -10 )
                        , circle 5
                            |> filled (rgb 46 56 66)
                            |> move ( 15, 0 )
                        , circle 5
                            |> filled (rgb 46 56 66)
                            |> move ( 35, 0 )
                        ]
                        |> move ( 6, -7 )
                    ]
                )

        --, square 125
        --    |> filled (rgb 46 56 66)
        --|> makeTransparent (if model.over == 2 then (model.t - model.t2)*2 else 0)
        --, text "A Game"
        --   |> size 32
        --  |> sansserif
        --   |> centered
        --   |> filled white
        --   |> move ( 0, -10 )
        --|> makeTransparent (if model.over == 2 then ((model.t - model.t2)*2) else 0)
        , roundedRect 175 175 10
            |> filled (rgba 0 0 0 0)
        ]
        |> scale 0.25

animationIcon =
    group
        [ singleFilmstrip
        , singleFilmstrip |> move ( 20, 0 )
        , singleFilmstrip |> move ( -20, 0 )
        ]
        |> clip (square 30 |> ghost)


singleFilmstrip =
    group
        [ square 20
            |> filled white
            |> subtract
                (group
                    [ rect 18 13.5 |> ghost
                    , group <| List.map (\x -> roundedRect 1 2 0.5 |> ghost |> move ( toFloat x * 2, 8.5 )) (List.range -5 5)
                    , group <| List.map (\x -> roundedRect 1 2 0.5 |> ghost |> move ( toFloat x * 2, -8.5 )) (List.range -5 5)
                    ]
                )
        ]
