module Tutoring exposing (..)

import Bootstrap.Accordion as Accordion
import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.ListGroup as Listgroup
import Bootstrap.Navbar as Navbar
import Bootstrap.Table as Table
import Bootstrap.Utilities.Spacing as Spacing
import Browser exposing (UrlRequest)
import Browser.Navigation as Navigation
import Dict exposing (Dict)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Url exposing (Url)
import Url.Parser as UrlParser exposing ((</>), Parser, s, top)


page : () -> List (Html a)
page () =
    [ h1 [ Spacing.my3 ] [ text "Tutoring" ]
    , ul []
        [ li [] [ text "What if your child needs extra help getting connected or finishing a lesson?" ]
        , li [] [ text "What if you want to do coding in your learning pod?" ]
        , li [] [ text "What if your child wants help with the game they started in a camp?" ]
        ]
    , p [] [ text "This is why we created tutoring services!" ]
    , ul []
        [ li [] [ text "What if your child is having trouble with a concept in math or science which could be explained better with a computer simulation?" ]
        ]
    , p [] [ text "We are really excited about this use of coding, but email us at macoutreach@gmail.com with the concept to verify that it is something we can prepare in a reasonable time." ]
    , Table.table
        { options = [ Table.striped ] -- list of table options
        , thead =
            Table.simpleThead
                --[ Table.inversedHead ]
                [ Table.th [] [ text "Pod Size" ]
                , Table.th [] [ text "Hours of Tutoring" ]
                , Table.th [] [ text "Number of Tutors" ]
                , Table.th [] [ text "Cost" ]
                ]
        , tbody =
            Table.tbody
                []
                [ Table.tr
                    []
                    [ Table.td [] [ text "1-2" ]
                    , Table.td [] [ text "1h" ]
                    , Table.td [] [ text "1 tutor" ]
                    , Table.td [] [ text "$25" ]
                    ]
                , Table.tr
                    []
                    [ Table.td [] [ text "1-2" ]
                    , Table.td [] [ text "5h" ]
                    , Table.td [] [ text "1 tutor" ]
                    , Table.td [] [ text "$100" ]
                    ]
                , Table.tr
                    []
                    [ Table.td [] [ text "3-6" ]
                    , Table.td [] [ text "1h" ]
                    , Table.td [] [ text "2 tutors" ]
                    , Table.td [] [ text "$50" ]
                    ]
                , Table.tr
                    []
                    [ Table.td [] [ text "3-6" ]
                    , Table.td [] [ text "5h" ]
                    , Table.td [] [ text "2 tutors" ]
                    , Table.td [] [ text "$200" ]
                    ]
                , Table.tr
                    []
                    [ Table.td [] [ text "4-10" ]
                    , Table.td [] [ text "1h" ]
                    , Table.td [] [ text "3 tutors" ]
                    , Table.td [] [ text "$75" ]
                    ]
                , Table.tr
                    []
                    [ Table.td [] [ text "4-10" ]
                    , Table.td [] [ text "5h" ]
                    , Table.td [] [ text "3 tutors" ]
                    , Table.td [] [ text "$300" ]
                    ]
                , Table.tr
                    []
                    [ Table.td [] [ text "1-2" ]
                    , Table.td [] [ text "1h" ]
                    , Table.td [] [ text "1 tutor" ]
                    , Table.td [] [ text "$25" ]
                    ]
                ]
        }
    , ul []
        [ li [] [ text "We cannot provide refunds, but we can reschedule a tutoring session." ]
        , li [] [ text "When purchasing 5 hours of tutoring, you will pick a day of the week and a time.  At the first session, your child can ask the tutor if the following sessions can be rescheduled, for example to squeeze in more tutoring before a camp deadline." ]
        , li [] [ text "You will be provided with a Zoom meeting link which is open during tutoring hours.  Children will meet their tutor in the room, and then be shifted to a break-out room." ]
        ]
    ]


links2form : String -> ( String, String ) -> Html msg
links2form title links =
    Grid.container []
        [ Grid.row []
            [ Grid.col [] [ p [] [ text title ] ]
            ]
        , Grid.row []
            [ Grid.col [ Col.md9 ] []
            , Grid.col [ Col.md3, Col.topMd ]
                [ oneLink links ]
            ]
        ]


links2games : String -> String -> List ( String, String ) -> Html msg
links2games title imgurl links =
    Grid.container []
        [ Grid.row []
            [ Grid.col []
                [ h2 [ Spacing.mt4 ] [ text title ]
                ]
            ]
        , Grid.row []
            [ Grid.col [ Col.md6 ]
                [ img [ style "width" "100%", src imgurl ] []
                ]
            , Grid.col [ Col.md3, Col.middleMd ]
                (List.map oneLink links)
            ]
        ]


oneLink : ( String, String ) -> Html msg
oneLink ( name, url ) =
    Grid.row [ Row.attrs [ Spacing.mt2 ] ]
        [ Grid.col []
            [ Button.linkButton
                [ Button.primary, Button.small, Button.attrs [ target "_blank", href url, Html.Attributes.style "width" "100%" ] ]
                [ text name ]
            ]
        ]
