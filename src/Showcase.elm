module Showcase exposing (comic2019, page, wordathonGames)

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


comic2019 =
    Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Comics 2019" ]
                |> Card.block []
                    [ Block.text []
                        [ text "For 2019, we partnered up with the schools of St Luke and Charles Beaudoin to create comics tied to teacher-selected curricula. The three main topics were global warming, the War of 1812, and ‘The Giver’, a novel by Lois Lowry."
                        ]
                    , Block.text [] [ text "Ranging from grades 7 to 8 and in groups of various sizes, the students managed to complete several comics over the span of a few hours. The format stayed similar to that of last year, with the comic being a narrative being told over the length of an eight panel comic. Students made use of various tools provided to them to create interactive comics. Students utilized the tracing tool to create shapes requiring complicated curves, text bubbles to show the dialogue between the characters and much more." ]
                    , Block.text [] [ text "By working on the comics, students were able to switch from a literary world to the world of coding. Feedback from the students revealed that they enjoy working on coding integrated with creative writing projects more than strictly writing activities." ]
                    , Block.custom
                        (links2games "Climate Change Comics"
                            "img/Flooding-Comic.png"
                            [ ( "Flooding", "https://macoutreach.rocks/comic853.html" )
                            , ( "Save The Sea Life", "https://macoutreach.rocks/comic861.html" )
                            , ( "Save The Turtles", "https://macoutreach.rocks/comic859.html" )
                            ]
                        )
                    , Block.custom
                        (links2games "War of 1812 Comics"
                            "img/War1812-Comic.png"
                            [ ( "War of 1812 #1", "https://macoutreach.rocks/comic855.html" )
                            , ( "War of 1812 #2", "https://macoutreach.rocks/comic854.html" )
                            , ( "War of 1812 #3", "https://macoutreach.rocks/comic857.html" )
                            ]
                        )
                    , Block.custom
                        (links2games "The Giver Comics"
                            "img/TheGiver-Comic.png"
                            [ ( "The Giver #1", "https://macoutreach.rocks/comic875.html" )
                            , ( "The Giver #2", "https://macoutreach.rocks/comic880.html" )
                            ]
                        )
                    ]
                |> Card.view
            ]
        ]


wordathonGames =
    Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Wordathon 2019" ]
                |> Card.block []
                    [ Block.text [] [ text "testing" ] ]
                |> Card.view
            ]
        ]


internshipCamp =
    Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Internship Style Summer Camp" ]
                |> Card.block []
                    [ Block.text [] [ text "For the summer of 2019, we had students from across the K-W and Hamilton school districts apply for our Internship Style Summer Camp. Most of the students had previous experience with our coding workshops and those who were very enthusiastic were encouraged to apply to our camp." ]
                    , Block.text [] [ text "The goal for the students was to create a multiplayer game to help improve math skills in kids in Grade 3. To prep the kids for the project, they underwent a number of workshops which included design thinking, elm programming, and cognitive Science. The students in the camp had a diverse set of talents, ranging from mathematics, programming, science, art, and other creative disciplines. This allowed for great dispersal of skills within groups which is helpful in creating well developed cohesive projects." ]
                    , Block.text [] [ text "By the end of each week in the camp, the students created functioning mini-games which were then added together to create a large multiplayer game. The kids gained technical skills in programming and math, as well as deep skills such as teamwork, empathy and leadership." ]
                    , Block.custom
                        (links2games "Escape Math Island"
                            "img/escapemathisland.jpeg"
                            [ ( "Escape Math Island", "https://macoutreach.rocks/escapemathisland" )
                            ]
                        )
                    ]
                |> Card.view
            ]
        ]


sciLitWeek =
    Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Science Literacy Week 2019" ]
                |> Card.block []
                    [ Block.text [] [ text "For the Science literacy week of 2019, we had students from across the K-W and Hamilton school districts apply for our Hackathon for making comics. Most of the students had previous experience with our coding workshops and those who were very enthusiastic were encouraged to apply to our camp." ]
                    , Block.text [] [ text "The goal for the students was to create Comics." ]
                    , Block.text [] [ text "Science Literacy Week 2019" ]
                    , Block.custom
                        (links2games "Comics 2019"
                            "img/CarnivorousPlants.png"
                            [ ( "Carnivorous Plants", "https://macoutreach.rocks/CarniverousPlants.html" )
                            , ( "How Long Can Worms Grow", "https://macoutreach.rocks/Worms.html" )
                            ]
                        )
                    ]
                |> Card.view
            ]
        ]


sciod =
    Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Science Odyssey 2018 at McMaster" ]
                |> Card.block []
                    [ Block.text [] [ text "For Science Odyssey 2018, McMaster Computing and Software Outreach taught children at Glen Brae, Lincoln Alexander, Nora Henderson, Ridgemount, Saginaw, St Luke, and Westview to create animations in the programming language Elm, with the challenge of illustrating K-2 reading words. We then taught high school students at Westmount to make games, and challenged them to make reading games to use the word animations." ]
                    , Block.text [] [ text "The goal for the students was to create Animations using ELM." ]
                    , Block.text [] [ text "Science Odyssey 2018" ]
                    , Block.custom
                        (links2games "Science Odyssey 2018"
                            "img/SciOd.jpg"
                            [ ( "Learn More.", "#sci-od" )
                            ]
                        )
                    ]
                |> Card.view
            ]
        ]


page : Model -> List (Html Msg)
page model =
    [ h1 [ Spacing.my5 ] [ text "🦄 Showcase" ]
    , internshipCamp
    , comic2019
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , sciLitWeek
    , sciod
    , Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Hall of Fame" ]
                |> Card.block []
                    [ Block.text []
                        [ text "When visiting schools for the wordathon we encouraged kids to submit their best animations to our Hall of Fame. To view their creations, click on the \" Hall of Fame \" button below."
                        ]
                    , Block.link [ href "http://www.cas.mcmaster.ca/~anand/hall.html" ] [ text "Hall of Fame" ]
                    ]
                |> Card.view
            ]
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
