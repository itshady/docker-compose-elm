module Calendar exposing (..)

import Array exposing (..)
import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.Table as Table
import Bootstrap.Utilities.Spacing as Spacing
import Browser exposing (..)
import Derberos.Date.Calendar as DCal
import Derberos.Date.Delta as DDelta
import Derberos.Date.Utils as DUtils
import Events exposing (events)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Time

import CalendarGSVG


{- ################## README - HOW TO UPDATE THE CALENDAR ##################

   Step 1: Clear out old events and update event descriptions if necessary
   Step 2: Create new Event(s) in "PUT CURRENT EVENTS BELOW"
   Step 3: VERY IMPORTANT .. put your events in "eventsList"
   Step 4: Compile using `.optimize.sh` and check that the events are in the right places using elm reactor
   Step 5: Push your code and request to merge your code with the active website code

-}
-- Put the events that will show up on the calendar here


eventsList =
    events



{- Simplify link referencing -}
-- Everything you want to add to the calendar must be an Event

-- for Felix


type alias Event =
    { name : String
    , month : Time.Month
    , date : Int
    , time : String
    , link : String -- PUT "" IF THERE IS NO LINK; NO HYPERLINK WILL DISPLAY
    }



{- EXAMPLE EVENT
   testEvent : Event
   testEvent =
     {
        name = "Elm Refresher 1-4"
      , month = Jun
      , date = 10
      , time = "10AM-1PM"
      , link = "https://forms.gle/w8W6BERCoUzhiQiLA"
     }
-}
----------------------------------------------------------------------------------
{- EVERYTHING BEYOND THIS POINT SHOULD ONLY BE TOUCHED FOR SERIOUS MODIFICATIONS TO THE CALENDAR ITSELF, NOT UPDATES -}


type alias LeapYear =
    Bool



{- *****************  MAKE MONTHS  ***************** -}


currentMonth model =
    let
        month =
            Time.toMonth Time.utc model.time

        leapYearOrNot =
            DUtils.isLeapYear (Time.toYear model.zone model.time)

        firstDay =
            Time.toWeekday Time.utc (DCal.getFirstDayOfMonth Time.utc model.time)
    in
    calendarMonth firstDay month leapYearOrNot


nextMonth model =
    let
        month =
            DUtils.getNextMonth (Time.toMonth Time.utc model.time)

        nextMonthPosix =
            DDelta.addMonths 1 Time.utc model.time

        firstDay =
            Time.toWeekday Time.utc (DCal.getFirstDayOfMonth Time.utc nextMonthPosix)

        leapYearOrNot =
            if DUtils.getNextMonth (Time.toMonth Time.utc model.time) == Time.Jan then
                DUtils.isLeapYear (Time.toYear model.zone model.time + 1)

            else
                DUtils.isLeapYear (Time.toYear model.zone model.time)
    in
    calendarMonth firstDay month leapYearOrNot


nextNextMonth model =
    let
        month =
            DUtils.getNextMonth (DUtils.getNextMonth (Time.toMonth Time.utc model.time))

        nextNextMonthPosix =
            DDelta.addMonths 2 Time.utc model.time

        firstDay =
            Time.toWeekday Time.utc (DCal.getFirstDayOfMonth Time.utc nextNextMonthPosix)

        leapYearOrNot =
            if
                DUtils.getNextMonth (DUtils.getNextMonth (Time.toMonth Time.utc model.time))
                    == Time.Jan
                    || DUtils.getNextMonth (DUtils.getNextMonth (Time.toMonth Time.utc model.time))
                    == Time.Feb
            then
                DUtils.isLeapYear (Time.toYear model.zone model.time + 1)

            else
                DUtils.isLeapYear (Time.toYear model.zone model.time)
    in
    calendarMonth firstDay month leapYearOrNot


nextNextNextMonth model =
    let
        month =
            DUtils.getNextMonth
                (DUtils.getNextMonth
                    (DUtils.getNextMonth
                        (Time.toMonth Time.utc model.time)
                    )
                )

        nextNextNextMonthPosix =
            DDelta.addMonths 3 Time.utc model.time

        firstDay =
            Time.toWeekday Time.utc (DCal.getFirstDayOfMonth Time.utc nextNextNextMonthPosix)

        leapYearOrNot =
            if
                DUtils.getNextMonth (DUtils.getNextMonth (Time.toMonth Time.utc model.time))
                    == Time.Jan
                    || DUtils.getNextMonth (DUtils.getNextMonth (Time.toMonth Time.utc model.time))
                    == Time.Feb
                    || DUtils.getNextMonth (DUtils.getNextMonth (Time.toMonth Time.utc model.time))
                    == Time.Mar
            then
                DUtils.isLeapYear (Time.toYear model.zone model.time + 1)

            else
                DUtils.isLeapYear (Time.toYear model.zone model.time)
    in
    calendarMonth firstDay month leapYearOrNot



{- *****************  END MAKE MONTHS  ***************** -}
-- DO NOT DELETE THE DUD EVENT


dudEvent : Event
dudEvent =
    { name = ""
    , month = Time.Jan
    , date = -1
    , time = ""
    , link = ""
    }



-- DO NOT DELETE THE DUD EVENT
{- HELPER FUNCTIONS FOR GENERATING CALENDAR MONTH IMPLEMENTATIONS -}


fromMonth : Time.Month -> String
fromMonth month =
    case month of
        Time.Jan ->
            "January"

        Time.Feb ->
            "February"

        Time.Mar ->
            "March"

        Time.Apr ->
            "April"

        Time.May ->
            "May"

        Time.Jun ->
            "June"

        Time.Jul ->
            "July"

        Time.Aug ->
            "August"

        Time.Sep ->
            "September"

        Time.Oct ->
            "October"

        Time.Nov ->
            "November"

        Time.Dec ->
            "December"



-- Shifts the calendar's starting day of the week


generateCalList : Time.Weekday -> Int -> List String
generateCalList monthStartsOnThisDay numOfDaysInTheMonth =
    let
        enumeratedDays =
            List.map String.fromInt (List.range 1 numOfDaysInTheMonth)
    in
    case monthStartsOnThisDay of
        Time.Sun ->
            enumeratedDays ++ List.repeat (42 - numOfDaysInTheMonth) ""

        Time.Mon ->
            List.repeat 1 "" ++ enumeratedDays ++ List.repeat (41 - numOfDaysInTheMonth) ""

        Time.Tue ->
            List.repeat 2 "" ++ enumeratedDays ++ List.repeat (40 - numOfDaysInTheMonth) ""

        Time.Wed ->
            List.repeat 3 "" ++ enumeratedDays ++ List.repeat (39 - numOfDaysInTheMonth) ""

        Time.Thu ->
            List.repeat 4 "" ++ enumeratedDays ++ List.repeat (38 - numOfDaysInTheMonth) ""

        Time.Fri ->
            List.repeat 5 "" ++ enumeratedDays ++ List.repeat (37 - numOfDaysInTheMonth) ""

        Time.Sat ->
            List.repeat 6 "" ++ enumeratedDays ++ List.repeat (36 - numOfDaysInTheMonth) ""



-- Generates calendar month if first day of month, month, and leap year status known


enterFirstDayOfMonthToGenerateCalendarMonth : ( Time.Weekday, Time.Month ) -> LeapYear -> List String
enterFirstDayOfMonthToGenerateCalendarMonth dayAndMonthPair isLeap =
    case Tuple.second dayAndMonthPair of
        Time.Jan ->
            generateCalList (Tuple.first dayAndMonthPair) 31

        Time.Feb ->
            if isLeap then
                generateCalList (Tuple.first dayAndMonthPair) 29

            else
                generateCalList (Tuple.first dayAndMonthPair) 28

        Time.Mar ->
            generateCalList (Tuple.first dayAndMonthPair) 31

        Time.Apr ->
            generateCalList (Tuple.first dayAndMonthPair) 30

        Time.May ->
            generateCalList (Tuple.first dayAndMonthPair) 31

        Time.Jun ->
            generateCalList (Tuple.first dayAndMonthPair) 30

        Time.Jul ->
            generateCalList (Tuple.first dayAndMonthPair) 31

        Time.Aug ->
            generateCalList (Tuple.first dayAndMonthPair) 31

        Time.Sep ->
            generateCalList (Tuple.first dayAndMonthPair) 30

        Time.Oct ->
            generateCalList (Tuple.first dayAndMonthPair) 31

        Time.Nov ->
            generateCalList (Tuple.first dayAndMonthPair) 30

        Time.Dec ->
            generateCalList (Tuple.first dayAndMonthPair) 31



-- Filters events to only include those that belong on a specific day of a specific month


dayMonthEquivalent : List Event -> Time.Month -> (Int -> String) -> Int -> List Event
dayMonthEquivalent eventList month f at =
    let
        event =
            Maybe.withDefault dudEvent (List.head eventList)

        restOfList =
            Maybe.withDefault [ dudEvent ] (List.tail eventList)
    in
    if eventList == [] then
        []

    else if String.fromInt event.date == f at && event.month == month then
        event :: dayMonthEquivalent restOfList month f at

    else
        dayMonthEquivalent restOfList month f at



-- Generates formatted code blocks for calendar cells


generateAllEventsForThatDay : Html msg -> List Event -> List (Html msg)
generateAllEventsForThatDay date events =
    let
        generateEvent event =
            if
                date
                    == text (String.fromInt event.date)
            then
                if event.link == "" then
                    [ div [ style "margin" "0.5em 0em 0em 0em" ] [ text event.name ]
                    , div [ style "margin" "0em 0em 0.5em 0em" ] [ text event.time ]
                    ]

                else
                    [ div [ style "margin" "0.5em 0em 0em 0em" ]
                        [ a [ target "_blank", style "text-decoration" "underline", href event.link ]
                            [ text event.name ]
                        ]
                    , div [ style "margin" "0em 0em 0.5em 0em" ] [ text event.time ]
                    ]

            else
                [ text "ERROR: THE DAY OF YOUR EVENT AND THE CALENDAR DAY DON'T MATCH!! " ]
    in
    List.concat
        [ [ div [ style "color" "red", style "width" "10vw" ] [ date ]
          ]
        , List.concat (List.map generateEvent events)
        ]



{- THIS IS WHAT GENERATES THE FINAL CALENDAR MONTH CODE -}
-- Finalizes a calendar month for deployment in "page"


calendarMonth : Time.Weekday -> Time.Month -> LeapYear -> List (Html Msg)
calendarMonth firstDayOfMonth month leapYear =
    let
        days =
            enterFirstDayOfMonthToGenerateCalendarMonth ( firstDayOfMonth, month ) leapYear

        getDay index =
            Maybe.withDefault "" (get index (Array.fromList days))

        showCalEntry n =
            Table.td []
                (generateAllEventsForThatDay (text (getDay n))
                    (dayMonthEquivalent eventsList month getDay n)
                )

        displayMonth =
            fromMonth month
    in
    [ div [] [ h2 [ style "text-align" "center", Spacing.my5 ] [ text displayMonth ] ]
    , Table.simpleTable
        ( Table.simpleThead
            [ Table.th [] [ text "Sun" ]
            , Table.th [] [ text "Mon" ]
            , Table.th [] [ text "Tues" ]
            , Table.th [] [ text "Wed" ]
            , Table.th [] [ text "Thurs" ]
            , Table.th [] [ text "Fri" ]
            , Table.th [] [ text "Sat" ]
            ]
        , Table.tbody []
            [ Table.tr []
                (List.map showCalEntry (List.range 0 6))
            , Table.tr []
                (List.map showCalEntry (List.range 7 13))
            , Table.tr []
                (List.map showCalEntry (List.range 14 20))
            , Table.tr []
                (List.map showCalEntry (List.range 21 27))
            , Table.tr []
                (List.map showCalEntry (List.range 28 34))
            , Table.tr []
                (List.map showCalEntry (List.range 35 41))
            ]
        )
    ]

type alias Model = CalendarGSVG.Model
type alias Msg = CalendarGSVG.Msg

init = CalendarGSVG.init

update = CalendarGSVG.update

-- The "view" for the Calendar page


page : Model -> List (Html Msg)
page model =
    List.concat
        [ [ h1 [ Spacing.my5 ] [ text "Calendar" ] ]
        , [ Grid.row []
                [ Grid.col []
                    [ 
                        -- Button.linkButton [ Button.primary, Button.attrs [ href "https://calendar.google.com/calendar/b/1?cid=bWNtYXN0ZXIuY2FfbG5wbmxuMmJ1bDVzYWY3bTduMTJyMzFqMnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ", target "_blank" ] ] [ text "Subscribe to Calendar" ]

                    -- , 
                    h2 [Spacing.mt5] [text "Buttons below will link to signup/payment pages as they become available."]
                    ]
                ]
          ]
        -- put your months below
        --, currentMonth model
        --, nextMonth model
        --, nextNextMonth model
        --, nextNextNextMonth model

        -- put your months above
        ,   [ Html.div [style "display" "flex", style "flex-direction" "row"]
                [ Html.div [style "width" "100%"] -- change the width of the icon
                    [
                        CalendarGSVG.widget model
                    ]
                ]
            ]
        ]
