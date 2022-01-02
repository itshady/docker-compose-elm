module Club exposing (page)

import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.ListGroup as Listgroup
import Bootstrap.Navbar as Navbar
import Bootstrap.Text as Text
import Bootstrap.Utilities.Spacing as Spacing
import Browser exposing (UrlRequest)
import Browser.Navigation as Navigation
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Model exposing (Model, Msg(..))
import Url exposing (Url)
import Url.Parser as UrlParser exposing ((</>), Parser, s, top)


page : Model -> List (Html Msg)
page model =
    [ h1 [ Spacing.my5 ] [ text "Club & Volunteering" ]
    , Grid.row []
        [ Grid.col [ Col.md6 ]
            [ Card.config []
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "McMaster Start Coding Signup" ]
                |> Card.block []
                    [ Block.text [] [ text "Join McMaster Start Coding where we learn functional programming and teach youth how to make graphics and animation!" ]
                    , Block.link [ href "https://docs.google.com/forms/d/e/1FAIpQLSe7qSXyDyK2LeQRSf7_uX9DsJqlI--mDjaOsNycOkIwQE3Yuw/viewform" ] [ text "Sign Up" ]
                    ]
                |> Card.view
            ]
        , Grid.col [ Col.md6 ]
            [ img [ style "width" "100%", src "img/Volunteer.jpg" ] []
            ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ h2 [ Spacing.mt5 ] [ text "Experiences from our Volunteers" ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text " \"I started volunteering with McMaster Outreach in the Fall of 2017. Through this program, I have travelled to schools to work with students from diverse communities. I have learned that when individuals are given the attention they require, they have tremendous capacity to learn and grow! It has been a pleasure to partake and watch the transformation of young children grow through our programming.\"    - Joanne Thai " ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text " \"This summer I was involved in a free summer camp we ran for grade 6-8 students. I was helping a grade 6 student with their code and they told me that, because of this camp, they wanted to pursue an eventual career in computer science. Moments like these are why I love Software: Tool for Change so much. If we can inspire even one student to pursue a STEM career, then that makes it all worth it.\"    - Christopher Schankula " ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]

    {- ,
       Grid.row []
             [ Grid.col [Col.textAlign Text.alignXsCenter]
                 [ h2[ Spacing.mt5 , style "text-align" "center"] [text "Our Team"]
                 ]
             ]


       , Card.group (cardList "Yumna Irfan" "Senan Gohar" "Pedram Yazdinia")
       , Card.group (cardList " Christopher Cschankula " "Joanne" "Yusra Irfan")
    -}
    , Grid.row [ Row.attrs [ style "background-color" "rgb(52,58,64)" ] ]
        -- grey space
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    ]


cardList : String -> String -> String -> List (Card.Config msg)
cardList name1 name2 name3 =
    [ Card.config [ Card.align Text.alignXsCenter ]
        |> Card.headerH3 [] [ text name1 ]
        |> Card.block []
            [ Block.text []
                [ a [ href "mailto:mcmasteroutreach@gmail.com" ] [ img [ style "width" "60px", src "img/mail-outline-filled.png" ] [] ]
                ]
            ]
        |> Card.footer []
            [ small [ class "text-muted" ] [ text "Send us an email." ] ]
    , Card.config [ Card.align Text.alignXsCenter ]
        |> Card.headerH3 [] [ text name2 ]
        |> Card.block []
            [ Block.text []
                [ a [ target "_blank", href "https://www.facebook.com/McMasterOutreach/" ] [ img [ style "width" "90px", src "img/facebook-logo.png" ] [] ]
                ]
            ]
        |> Card.footer []
            [ small [ class "text-muted" ] [ text "Check out our Facebook Page." ] ]
    , Card.config [ Card.align Text.alignXsCenter ]
        |> Card.headerH3 [] [ text name3 ]
        |> Card.block []
            [ Block.text []
                [ a [ target "_blank", href "https://www.google.com/maps/place/McMaster+University/@43.2600915,-79.9228492,15z/data=!4m5!3m4!1s0x882c84ac44f72ac1:0x399e00ea6143011c!8m2!3d43.260879!4d-79.9192254" ] [ img [ style "width" "75px", src "img/15-512.png" ] [] ]
                ]
            ]
        |> Card.footer []
            [ small [ class "text-muted" ] [ text "Check out our Location." ] ]
    ]
