module Contact exposing (page)

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
    [ h1 [ Spacing.my5 ] [ text "Contact" ]
    , Grid.row []
        [ Grid.col []
            [ h4 [ style "text-align" "center" ] [ text "Are you a teacher, parent or student? Get in touch with us; we'd love to run a workshop at a school near you!" ]
            ]
        ]
    , Grid.row []
        [ Grid.col [ Col.textAlign Text.alignXsCenter ]
            [ h2 [ style "text-align" "center" ] [ text "Get in Touch:" ]
            ]
        ]
    , Card.group cardList
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row [ Row.attrs [ style "background-color" "rgb(52,58,64)" ] ]
        -- grey space
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , h1 [ Spacing.my5 ] [ text "Donate" ]
    , Grid.row []
        [ Grid.col []
            [ h2 [ style "text-align" "center" ] [ text "Do you share our vision of providing learning opportunities to childen, independently of parents' ability to pay?" ]
            ]
        ]
    , Grid.row []
        [ Grid.col [ Col.textAlign Text.alignXsCenter ]
            [ text "To support our workshops and extracurricular activities you may make a donation eligible for a tax receipt for donations of $25.00 or greater. Please contact Ms. Terry Milson, McMaster University, Faculty of Engineering Advancement Officer by phone or email to learn more about contributing to the Algebraic Thinking fund."
            ]
        ]
    , Card.group donateCardList
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row [ Row.attrs [ style "background-color" "rgb(52,58,64)" ] ]
        -- grey space
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    ]


cardList : List (Card.Config msg)
cardList =
    [ Card.config [ Card.align Text.alignXsCenter ]
        |> Card.headerH3 [] [ text "Email:" ]
        |> Card.block []
            [ Block.text []
                [ a [ href "mailto:mcmasteroutreach@gmail.com" ] [ img [ style "width" "60px", src "img/mail.png" ] [] ]
                ]
            ]
        |> Card.footer []
            [ small [ class "text-muted" ] [ text "Send us an email." ] ]
    , Card.config [ Card.align Text.alignXsCenter ]
        |> Card.headerH3 [] [ text "Facebook:" ]
        |> Card.block []
            [ Block.text []
                [ a [ target "_blank", href "https://www.facebook.com/McmasterStartcoding" ] [ img [ style "width" "90px", src "img/facebook-logo.png" ] [] ]
                ]
            ]
        |> Card.footer []
            [ small [ class "text-muted" ] [ text "Check out our Facebook Page." ] ]
    , Card.config [ Card.align Text.alignXsCenter ]
        |> Card.headerH3 [] [ text "Address:" ]
        |> Card.block []
            [ Block.text []
                [ a [ target "_blank", href "https://www.google.com/maps/place/McMaster+University/@43.2600915,-79.9228492,15z/data=!4m5!3m4!1s0x882c84ac44f72ac1:0x399e00ea6143011c!8m2!3d43.260879!4d-79.9192254" ] [ img [ style "width" "75px", src "img/15-512.png" ] [] ]
                ]
            ]
        |> Card.footer []
            [ small [ class "text-muted" ] [ text "Check out our Location." ] ]
    ]


donateCardList : List (Card.Config msg)
donateCardList =
    [ Card.config [ Card.align Text.alignXsCenter ]
        |> Card.headerH3 [] [ text "Email:" ]
        |> Card.block []
            [ Block.text [ style "font-size" "300%" ]
                [ a [ href "mailto:milsont@mcmaster.ca?subject=AlgebraicThinkingFund" ] [ text "✉️" ]
                ]
            ]
        |> Card.footer []
            [ small [ class "text-muted" ] [ text "Email milsont@mcmaster.ca to inquire about donating to the Algebraic Thinking fund." ] ]
    , Card.config [ Card.align Text.alignXsCenter ]
        |> Card.headerH3 [] [ text "Telephone:" ]
        |> Card.block []
            [ Block.text [ style "font-size" "300%" ]
                [ a [ href "tel:905-525-9140;;27391" ] [ text "☎️" ]
                ]
            ]
        |> Card.footer []
            [ small [ class "text-muted" ] [ text "Call (905)525-9140 extension 27391 to inquire about donating to the Algebraic Thinking fund." ] ]
    ]
