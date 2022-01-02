module Team exposing (page)

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
import GraphicSVG exposing (transform)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Model exposing (Model, Msg(..))
import Url exposing (Url)
import Url.Parser as UrlParser exposing ((</>), Parser, s, top)


page : Model -> List (Html Msg)
page model =
    [ h1 [ Spacing.my5 ] [ text "Meet Our Mentors" ]

    --mentor1
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorAbdullah.png", alt "Mentor Abdullah" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Abdullah" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my third year of Electrical Engineering. With McMaster Start Coding, I'm a Crazy Animations & Dynamic Comics Camp Leader and an Elm Sprints Instructor." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "When you let your creativity run free and set your mind to accomplishing a goal, there's nothing you can't achieve." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me in a heated game of soccer, enjoying a nice hiking trail, or spending quality time with friends and family." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor2
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorAngel.png", alt "Mentor Angel" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Angel" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my third year of iBioMed (Health, Engineering Science, & Entrepreneurship). I help out with the Dynamic Comics and Educational Games camps. I also teach at Elm Sprints and help with one of our latest projects, Elm Music." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "Concepts from the classroom can be stretched far with creativity to find innovative brilliance!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me playing the piano, hanging out with my bunny, or working on a painting or digital drawing!" ]
                    ]
                |> Card.view
            ]
        ]

    --mentor3
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorDeborah.png", alt "Mentor Deborah" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Deborah" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I graduated with a Degree in Art History. I'm a seasoned developer for Comics, helping to create the workshop for it last year. Now, we've turned it into a camp! I'm also an Elm Sprints Instructor and Artistic Designer for the team." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "Patience is the key to unlocking the potential in every child and teamwork has tremendous power for incredible work." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me exploring Software and Computing and integrating it with my background in Art History." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor4
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorGabrielle.png", alt "Mentor Gabrielle" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Gabrielle" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my fifth year of Life Science. With McMaster Start Coding, I am a Content Developer & Lead for the Educational Games camp. As an Elm Sprints Instructor, I specialize in international lessons. I've also been helping to produce Elm Music." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "Kindness stretches long and far, and fun is a key ingredient for learning and development." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me learning about policy and academic thoery and advocating for equal rights within education." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor5
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorGurleen.png", alt "Mentor Gurleen" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Gurleen" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my third year of iBioMed with a specialization in Chemical & Biomedical Engineering. I'm an instructor for Elm Sprints and I specialize in international teaching. I'm a member of the Elm Music team, but I also work on our media and promotional material. Check out our social media ads and YouTube videos lessons to see some of my work." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "When we get creative with content delivery and instruction, learning can be fun and effective." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me practicing karate, working on a sculpture or piece of embroidery, taking a scenic photo or making glass art, and helping out in my community." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor6
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorJamie.png", alt "Mentor Jamie" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Jamie" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my fourth year of Life Science. I've been working to develop and lead the Crazy Animations camp and I also teach with Elm Sprints!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "To organize my time well and lead by example, being part of a team means looking out for our collective interests." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me running or hiking the trails near McMaster or taking beautiful photos and videos." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor7
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorMaliha.png", alt "Mentor Maliha" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Maliha" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my second year of Mechanical Engineering & Management. At McMaster Start Coding, I've been a leader at our Hackathons and events. I'm also an instructor with Elm Sprints and many of our summer camps!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "That computer programming is a great way to learn logical thinking and mathematical manipulation. I believe that it is something that everyone is capable of." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me reading historical fiction or playing badminton or volleyball!" ]
                    ]
                |> Card.view
            ]
        ]

    --mentor8
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorMichelle.png", alt "Mentor Michelle" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Michelle" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Program and Year" ]
                    , Block.text [] [ text "I'm in my fourth year of Biology & Mathematics. I'm an instructor with Elm Sprints!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "That children don't have boundaries on their creativity! It has been incredibly rewarding to watch them learn and strive in our program." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me with my nose in a book or going on a hike." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor9
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorMikha.png", alt "Mentor Mikha" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Mikha" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my fourth year of Electrical Engineering & Society. I'm Content Developer & Leader for the Crazy Animations camp and an instructor with many of our workshops and Elm Sprints lessons." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "Learning is a life long process, and leaning on my team for support has helped me grow as a developer, instructor, and person!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me in a chess match, playing every sport under the sun, or finding a way to make other people smile!" ]
                    ]
                |> Card.view
            ]
        ]

    --mentor10
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorParimal.png", alt "Mentor Parimal" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Parimal" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Program and Year" ]
                    , Block.text [] [ text "I'm in my third year of Electrical Engineering and I'm an instructor with Elm Sprints and our many summer camps!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "A quality experience for our students comes from collaborative work among our teammates." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me on a run, in a basketball game, or watching Suits!" ]
                    ]
                |> Card.view
            ]
        ]

    --mentor11
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorRafi.png", alt "Mentor Rafi" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Rafi" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Program and Year" ]
                    , Block.text [] [ text "I'm in my third year of Electrical Engineering and I'm an instructor with Elm Sprints and many of our summer camps!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "Effective communication, quick thinking, and confidence are important for being a dynamic instructor." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me organizing my bank notes collection from all across the world, listening to classical music, or trying out a new restaurant." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor12
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorRebecca.png", alt "Mentor Rebecca" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Rebecca" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Program and Year" ]
                    , Block.text [] [ text "I'm in my third year of Computer Engineering. With McMaster Start Coding, I'm an Elm Sprints instructor and the evening activities Leader, organizing lessons and camps! I also helped develop and plan many of our workshops, hackathons, and events!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "You've never to young to learn how to code, and creativity is key when guiding students and delivering content!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me hanging out with my family (I have a twin!), practicing the piano, or advocating for Girls in STEM." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor13
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorRutvi.png", alt "Mentor Rutvi" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Rutvi" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my second year of Computer Engineering. I'm an Elm Sprints Content Developer and Instructor and I also specialize in international teaching. Look for me at the multiple camps we have going on this summer." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a instructor taught me that..." ]
                    , Block.text [] [ text "Every student is unique and require teaching styles specific to their needs, but when they are met, every child is capable of performing to their potential!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me volunteering at local food banks and soup kitchens, or sketching and painting." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor14
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorSharon.png", alt "Mentor Sharon" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Sharon" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Program and Year" ]
                    , Block.text [] [ text "I'm a Computing & Software Engineering Master's Candidate! I've been helping with the summer camps, developing the 3D camp material, and working on games for the Crazy Animations camp." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "Teamwork is important when working on large projects and kids have a potential that is just out of this world!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me making a new friend and diving deep into a niche conversation, you never know what you might just learn." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor15
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorStephanie.png", alt "Mentor Stephanie" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Stephanie" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I graduated with a Degree in Psychology and a minor in Computer Science. I'm a leader at the Dynamic Comics camp and a Content Developer for the Educational Games camp." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "Patience is key to working well with others and it is important to be able to communicate technology with people in tech, as well as those outside of tech!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me working on my electric airplace startup or working on a watercolour painting." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor16
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorSteven.png", alt "Mentor Steven" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Steven" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my third year of Computer Science. I work behind the scenes on this website, and help to facilitate the marketing material you see on our social media platforms. I'm a Content Developer for the Dynamic Comics camp and an instructor with Elm Sprints." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "Effective teaching is the gold standard of understanding; if you can help someone learn something new, then you truly grasp the material." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me reading about politics or doing cutting edge work on elliptic curve cryptography." ]
                    ]
                |> Card.view
            ]
        ]

    --mentor17
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "300px", src "img/mentorTawana.png", alt "Mentor Tawana" ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.header [ style "color" "crimson", style "font-weight" "700", style "font-size" "22.4px" ] [ text "Tawana" ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "About me" ]
                    , Block.text [] [ text "I'm in my third year of Computer Engineering & Management and I'm an instructor with Elm Sprints and our various summer camps!" ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Being a mentor taught me that..." ]
                    , Block.text [] [ text "In order for teams to work well together, they need to communicate effectively." ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text "Outside of Outreach" ]
                    , Block.text [] [ text "Find me learning new tools and techonologies, I hope to one day go back to Botswana to start a cloud computing company and help the economy!" ]
                    ]
                |> Card.view
            ]
        ]
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
