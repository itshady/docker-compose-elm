module SVGPictures exposing (..)

import GraphicSVG exposing (..)


boyHuman =
    group
        [ rect 5 18 |> filled black |> move ( 6, -25 )
        , rect 5 18 |> filled black |> move ( -6, -25 )
        , rect 20 40 |> filled (rgb 112 20 60)
        , circle 18 |> filled lightBrown |> move ( 0, 20 )
        , rect 5 18 |> filled black |> rotate (degrees 15) |> move ( 12, -6 )
        , rect 5 18 |> filled black |> rotate (degrees -15) |> move ( -12, -6 )
        , curve ( 0, 0 ) [ Pull ( 10, 0 ) ( 20, -10 ) ]
            |> filled black
            |> rotate (degrees 28)
            |> scale 1.5
            |> scaleY 2.5
            |> move ( -18, 29 )
        , circle 2.5 |> filled black |> move ( 6, 25 )
        , circle 2.5 |> filled black |> move ( -6, 25 )
        , roundedRect 8 5 3
            |> filled red
            |> move ( 0, 15 )
        ]


girlHuman =
    group
        [ roundedRect 40 55 20
            |> filled black
            |> move ( 0, 15 )
        , rect 5 18 |> filled black |> move ( 6, -25 )
        , rect 5 18 |> filled black |> move ( -6, -25 )
        , rect 20 40 |> filled (rgb 112 20 60)
        , circle 18 |> filled lightBrown |> move ( 0, 20 )
        , rect 5 18 |> filled black |> rotate (degrees 15) |> move ( 12, -6 )
        , rect 5 18 |> filled black |> rotate (degrees -15) |> move ( -12, -6 )
        , circle 2.5 |> filled black |> move ( 6, 25 )
        , circle 2.5 |> filled black |> move ( -6, 25 )
        , roundedRect 8 5 3
            |> filled red
            |> move ( 0, 15 )
        , wedge 18 0.5
            |> filled black
            |> rotate (degrees 90)
            |> scaleY 0.75
            |> move ( 0, 28 )
        ]
