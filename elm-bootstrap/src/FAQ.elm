module FAQ exposing (page)

import Bootstrap.Accordion as Accordion
import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.ListGroup as Listgroup
import Bootstrap.Navbar as Navbar
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
    [ h1 [ Spacing.my5 ] [ text "FAQ" ]
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "Who is McMaster Start Coding?" ]
            , Block.text [] [ text "A student club at McMaster University." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "Who is Software: Tool for Change?" ]
            , Block.text [] [ text "An activist research project at McMaster University led by Christopher Anand." ]
            , Block.link [ target "_blank", href "http://www.cas.mcmaster.ca/~anand"] [ text "More about Dr. Anand" ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "Will you come to our school?" ]
            , Block.text [] [ text "Pre-pandemic we visited schools near Hamilton, as far away as Waterloo and Brampton. Now that we vist schools virtually, we have travelled as far as Hyderabad, India." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "Do you offer summer camps?" ]
            , Block.text [] [ text "Yes, see the Camps tab." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "What age groups do you teach?" ]
            , Block.text [] [ text "We teach programming to grades 4-8 with our web interface, and grades 2 and 3 with our iPad app ElmJr, and Image 2 Bits. We also train high school students to be mentors, and we teach grades 5-PhD about Design Thinking." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "How much do lessons cost?" ]
            , Block.text [] [ text "Our first four lessons are free, as are the YouTube videos of most of our lessons.  Live lessons after lesson four are $10 per lesson, but each camp includes a free lesson." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "I'm a parent, how can I get my child enrolled?" ]
            , Block.text [] [ text "Let your child's teachers know about free classroom visits, and see the Camps tab for information about weekend and summer camps." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "How can I sign my class up?" ]
            , Block.text [] [ text "Use the sign-up button on the home page." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "What is Elm?" ]
            , Block.text [] [ text "Elm is a pure functional language used for web programming, for which we created a graphics library." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "What is a pure functional language?" ]
            , Block.text [] [ text "It is a programming language in which functions and variables work the same way they do in math." ]
            ]
        |> Card.view
    , Card.config []
        |> Card.block []
            [ Block.titleH4 [] [ text "Why don't you use other languages?" ]
            , Block.text [] [ text "We found children learn much faster with Elm and can do more with less typing." ]
            , Block.link [ target "_blank", href "http://eptcs.web.cse.unsw.edu.au/paper.cgi?TFPIE2017.2"] [ text "We developed a theory to explain this, which we call Algebraic Thinking." ]

            ]
        |> Card.view
    
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
