module Tabs exposing (..)

import GraphicSVG exposing (..) 
-- import GraphicSVG.Widget as Widget

oldButton (msg,(backgroundColour,textColor),(line1,line2)) =
        group 
            [ curve (0,12) 
                [ Pull (0,12) (6,12)
                , Pull (8,12) (9,9)
                , Pull (10.5,4) (10.5,4)
                , Pull (12,0) (15,0)
                , Pull (15,0) (15,-1)
                , Pull (0,-1) (0,-1)
                , Pull (0,-1) (-15,-1)
                , Pull (-15,0) (-15,0)
                , Pull (-12,0) (-10.5,4)
                , Pull (-10.5,4) (-9,9)
                , Pull (-8,12) (-6,12)
                ]
                  |> filled backgroundColour
            ,   rect 400 4 |> filled backgroundColour |> move (0,-2)
            ,   text line1 |> centered |> size 3 |> filled textColor
                    |> move (0,0)
            ,   text line2 |> centered |> size 4 |> filled textColor
                    |> move (0,-5)
            ]
            |> notifyTap msg
{-}
  , uprightPaint ("msg",rgb 0 160 225,("Code","like","Picasso")) |> move (50,0)
  , tippedPaint ("msg",rgb 0 160 225,("Code","like","Picasso"))
  ]
-}
tippedPaint canClr (msg,clr,(line1,line2,line3)) =
  let
    topBottom = oval 60 55 |> filled canClr
    innerTop = oval 54 50 |> filled clr
      |> addOutline (solid 0.5) black
    shift = if line2 == "" then 15 else 0
  in
    [ topBottom
        |> move (0,20)
        |> addOutline (solid 1) clr
    , rect 60 40 |> filled canClr
    , topBottom
        |> addOutline (solid 1) black
        |> subtract ( innerTop)
        |> move (0,-20)
    , innerTop
        |> move (0,-20)
    , curve (-17.44,-38.82) [Pull (-5.404,-47.08) (-4.96,-52.74)
                            ,Pull (-50.03,-52.36) (-795.11,-60)
                            ,Pull (-795.34,-57.78) (-795.57,-60)
                            ,Pull (-0.066,-90.98) (795.441,-60)
                            ,Pull (795.47,-57.96) (795.498,-60)
                            ,Pull (49.562,-53.98) (3.6264,-52.01)
                            ,Pull (7.4120,-44.31) (16.197,-39.80)
                            ,Pull (-0.113,-39.10) (-17.44,-38.82)]
        |> filled clr
    , text line1 |> size 20 |> alignRight |> filled white
        |> rotate (degrees 4)
        |> move (-20+shift,-66)
    , text line2 |> size 15 |> centered |> filled white
        |> rotate (degrees -3)
        |> move (0,-70)
    , text line3 |> size 20 |> alignLeft |> filled white
        |> move (25-shift,-66)
        |> rotate (degrees -4)
    ]
    |> group
    |> move (0,20)
    |> scale 0.2

uprightPaint canClr (msg,clr,(line1,line2,line3)) =
  let
    topBottom = oval 60 15 |> filled canClr
    innerTop = oval 54 12 |> filled clr
      |> addOutline (solid 0.5) black
  in
    [ topBottom
        |> move (0,-30)
        |> addOutline (solid 1) clr
    , rect 60 60 |> filled canClr
    , topBottom
        |> addOutline (solid 1) black
        |> subtract ( innerTop)
        |> move (0,30)
    , innerTop
        |> move (0,30)
    , text line1 |> centered |> filled clr
        |> move (0,5)
    , text line2 |> size 8 |> centered |> filled clr
        |> move (0,-3)
    , text line3 |> centered |> filled clr
        |> move (0,-12)
    ]
    |> group
    |> move (0,5)
    |> scale 0.2
    |> notifyTap msg
