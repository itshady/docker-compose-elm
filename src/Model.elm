module Model exposing (..)

import Bootstrap.Accordion as Accordion
import Bootstrap.Card.Block as Block
import Bootstrap.Carousel as Carousel
import Bootstrap.Carousel.Slide as Slide
import Bootstrap.Modal as Modal
import Bootstrap.Navbar as Navbar
import Browser exposing (UrlRequest)
import Browser.Navigation as Navigation
import Camps
import Calendar
import Lessons
import Time
import Url exposing (Url)

import Parameters exposing (Tabs)

type alias Model =
    { navKey : Navigation.Key
    , page : Page
    , navState : Navbar.State
    -- , carouselState : Carousel.State
    , campsState : Camps.Model
    , calendarState : Calendar.Model
    , lessonsState : Lessons.Model
    , videoState : Modal.Visibility
    , zone : Time.Zone
    , time : Time.Posix
    }


type Page
    = Home
    | ClassVisits
    | Club
    | Jr
    | SciOd
    | SciLit2019
    | NewYouthHack
    | FAQ
    | Showcase
    | CodingTools
    | Examples
    | Contact
    | Research
    | NotFound
    | Comics2019
    | Wordathon2019
    | Calendar
    | Team
    | Execs
    | Board
    | Tutoring
    | Camps Tabs
    | Lessons Int
    | Hackathon
    | Donate

type Msg
    = UrlChange Url
    | ClickedLink UrlRequest
    | NavMsg Navbar.State
    -- | CarouselMsg Carousel.Msg
    | CampsMsg Camps.Msg
    | CalendarMsg Calendar.Msg
    | LessonsMsg Lessons.Msg
    | OpenVideo
    | CloseVideo
    | Tick Time.Posix
    | AdjustTimeZone Time.Zone
    | NoOp
