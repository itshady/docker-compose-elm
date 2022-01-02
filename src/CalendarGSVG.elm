module CalendarGSVG exposing (..)

import GraphicSVG exposing (..) 
import GraphicSVG.Widget as Widget

import Parameters exposing (..)


type alias Model =
    { widget : Widget.Model
    , lessonHighlight : Maybe (Int,Int,Int) 
    , campHighlight : Maybe (Int,Int) 
    , weekendHighlight : Maybe (Int,Int) 
    }

widgetWidth = 192
widgetHeight = (List.length weeks |> toFloat) * 20 + 20

init : ( Model, Cmd Msg)
init =
    let
        (wState, wCmd) = Widget.init widgetWidth widgetHeight "calendar"
    in 
    (   { widget = wState
        , lessonHighlight = Nothing
        , campHighlight = Nothing
        , weekendHighlight = Nothing
        }
    , Cmd.map WidgetMsg wCmd )

type Msg
    = WidgetMsg Widget.Msg
    | LeaveLesson (Int,Int,Int) 
    | EnterLesson (Int,Int,Int)
    | LeaveCamp (Int,Int) 
    | EnterCamp (Int,Int)
    | LeaveWeekend (Int,Int) 
    | EnterWeekend (Int,Int)
 
update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        WidgetMsg wMsg ->
            let
                (newWState, wCmd) = Widget.update wMsg model.widget
            in
                ({ model | widget = newWState }
                , Cmd.map WidgetMsg wCmd) 
        EnterLesson idx -> 
            ( { model | lessonHighlight = Just idx }, Cmd.none )
        LeaveLesson _ ->
            ( { model | lessonHighlight = Nothing }, Cmd.none )
        EnterCamp idx -> 
            ( { model | campHighlight = Just idx }, Cmd.none )
        LeaveCamp _ ->
            ( { model | campHighlight = Nothing }, Cmd.none )
        EnterWeekend idx -> 
            ( { model | weekendHighlight = Just idx }, Cmd.none )
        LeaveWeekend _ ->
            ( { model | weekendHighlight = Nothing }, Cmd.none )

widget model = 
  Widget.view model.widget
    [
        (
        List.indexedMap 
            ( \ wIdx ds -> 
                ( List.indexedMap ( \ dIdx day -> text (String.fromInt day) 
                                                    |> fixedwidth 
                                                    |> size 4
                                                    |> filled black 
                                                    |> move (20 * toFloat dIdx - 69, 0)
                                    )
                            ds
                                        |> ( \ x -> (rect 140 0.1 |> filled black 
                                                    |> move (0,4)) :: x )
                                        |> group
                                        |> move (0,toFloat wIdx * -20 + ((List.length weeks |> toFloat) * 10))
                )
            )
            weeks 
        ++
        [rect 140 0.1 |> filled black 
                                                    |> move (0,4 - 10 * (toFloat <| List.length weeks))]
        ++
        ( List.map ( \ idx -> rect 0.1 ((List.length weeks |> toFloat) * 20 + 1) 
                                |> filled black |> move (toFloat idx * 20 - 70,3.5) )
                    <| List.range 0 7
        )
        ++
        ( List.map (weekButton model.campHighlight) camps )

        ++
        ( List.map (lessonButton model.lessonHighlight) lessons )
        ++
        ( List.map (weekendButtons model.weekendHighlight) weekendLessons )

        ++
        [ [ text "May" |> fixedwidth |> size 8 |> filled black 
            |> rotate (degrees 90)
            |> move (-72,40)
        , openPolygon [(-128,-26),(-30,-26),(-30,-6),(128,-6)] |> outlined (solid 0.5) black
        , text "June" |> fixedwidth |> size 8 |> filled black 
            |> rotate (degrees 90)
            |> move (-72,46-93)
        , openPolygon [(-128,-26),(10,-26),(10,-6),(128,-6)] |> outlined (solid 0.5) black
            |> move (0,-80)
        , text "July" |> fixedwidth |> size 8 |> filled black 
            |> rotate (degrees 90)
            |> move (-72,46-173)
        , rect 192 0.5 |> filled black
            |> move (0,-186)
        , text "August" |> fixedwidth |> size 8 |> filled black 
            |> rotate (degrees 90)
            |> move (-72,46-263)
        ] |> group |> move (0,110) ]
        )  |> group |> move (0,0)
    ]


   -- ++
   -- [ text (Debug.toString <| days2Weeks <| days) |> size 4 |> filled black |> move (-60,0) ]



lessonButton lessonHighlight ((wIdx,dayIdx,numInWeek), (title,clr)) =
   [    ( if lessonHighlight == Just (wIdx,dayIdx,numInWeek) then 
            roundedRect 18 5 2.5 |> filled clr |> makeTransparent 0.5 |> addOutline (solid 1) clr 
        else
            roundedRect 18 5 2.5 |> filled clr
        ) 
   , text title |> fixedwidth |> size 4 |> centered |> ( if lessonHighlight == Just (wIdx,dayIdx,numInWeek) then 
            bold
        else
            identity
        )|> filled lightGrey
                           |> move (0,-1)
   ]
     |> group
     |> move (toFloat dayIdx * 20 - 60, 155 - 20 * (toFloat wIdx) - 6 * toFloat numInWeek)
     |> notifyEnter (EnterLesson (wIdx,dayIdx,numInWeek))
     |> notifyLeave (LeaveLesson (wIdx,dayIdx,numInWeek))
     |> addHyperlink (title2link title)


title2link title =
        ( if  title == "L1+L2" || title == "L3+L4" || title == "Herogram" then
                "https://forms.gle/q8oUaBYXcZihmxX98"
            else 
                "https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-lessons-2021"
        )

weekendButtons highlight (wIdx, ((morning,mclr), (aft,aclr), (hack,hackClr))) =
  let
    dayIdx = 6
  in
    group
    [
        [ if highlight == Just (wIdx,1) then 
            roundedRect 12 5 2.5 |> filled mclr |> makeTransparent 0.5 |> addOutline (solid 1) mclr 
        else
            roundedRect 12 5 2.5 |> filled mclr
        , text morning |> fixedwidth |> size 4 |> centered 
                |> ( if highlight == Just (wIdx,1) then 
                    bold
                else
                    identity
                )
                |> filled lightGrey
                                |> move (0,-1)
        ]
            |> group
            |> move (toFloat dayIdx * 20 - 63, 155 - 20 * (toFloat wIdx) - 6 * toFloat 0)
            |> notifyEnter (EnterWeekend (wIdx,1))
            |> notifyLeave (LeaveWeekend (wIdx,1))
            |> addHyperlink (title2link morning)
    ,
        [ if highlight == Just (wIdx,2) then 
            roundedRect 12 5 2.5 |> filled aclr |> makeTransparent 0.5 |> addOutline (solid 1) aclr 
        else
            roundedRect 12 5 2.5 |> filled aclr
        , text aft |> fixedwidth |> size 4 |> centered 
                |> ( if highlight == Just (wIdx,2) then 
                    bold
                else
                    identity
                )
                |> filled lightGrey
                                |> move (0,-1)
        ]
            |> group
            |> move (toFloat dayIdx * 20 - 63, 155 - 20 * (toFloat wIdx) - 6 * toFloat 1)
            |> notifyEnter (EnterWeekend (wIdx,2))
            |> notifyLeave (LeaveWeekend (wIdx,2))
            |> addHyperlink (title2link aft)
    ,
        [ if highlight == Just (wIdx,3) then 
            roundedRect 19 5 2.5 |> filled hackClr |> makeTransparent 0.5 |> addOutline (solid 1) hackClr 
        else
            roundedRect 19 5 2.5 |> filled hackClr
        , text hack |> fixedwidth |> size 2.5 
                |> ( if highlight == Just (wIdx,3) then 
                    bold >> filled black
                else
                    identity >> filled white
                )
                                |> move (-6,-0.5)
        , gameIcon |> scale 0.1
            |> rotate (degrees -90)
            |> move (-7.5,0)
        ]
            |> group
            |> rotate (degrees 90)
            |> move (toFloat dayIdx * 20 - 53, 154 - 20 * (toFloat wIdx))
            |> notifyEnter (EnterWeekend (wIdx,3))
            |> notifyLeave (LeaveWeekend (wIdx,3))
            |> addHyperlink "https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021"
    ]


weekButton highlight ((wIdx,numInWeek), (title,icon,clr)) =
   [ ( if highlight == Just (wIdx,numInWeek) then 
            roundedRect 98 5 2.5 |> filled clr |> makeTransparent 0.5 |> addOutline (solid 1) clr 
        else
            roundedRect 98 5 2.5 |> filled clr
        )
   , icon |> scale 0.1 |> move ( (String.length title + 3 |> toFloat) * -1.25, 0)
   , icon |> scale 0.1 |> move ( (String.length title + 3 |> toFloat) * 1.25, 0)
   , text title |> fixedwidth |> size 4 |> centered 
                |> ( if highlight == Just (wIdx,numInWeek) then 
                    bold 
                else
                    identity 
                )
            |> filled white
                           |> move (0,-1)
   ]
     |> group
     |> move ( if wIdx == 12 then 20 else 0
             , 155 - 20 * (toFloat wIdx) - 6 * toFloat numInWeek)
        |> notifyEnter (EnterCamp (wIdx,numInWeek))
        |> notifyLeave (LeaveCamp (wIdx,numInWeek))
     |> addHyperlink "https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021"


   
days = [ List.range 9 31
       , List.range 1 30
       , List.range 1 31
       , List.range 1 27
       ]
       |> List.concat

days2Weeks ds =
  case ds of
    d1 :: d2 :: d3 :: d4 :: d5 :: d6 :: d7 :: rest ->
      (d1 :: d2 :: d3 :: d4 :: d5 :: d6 :: d7 :: []) :: (days2Weeks rest)
    leftovers ->
      [leftovers]


weeks = days2Weeks days
