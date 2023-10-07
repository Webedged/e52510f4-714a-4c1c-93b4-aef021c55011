import {Injectable} from "@angular/core";
import {EventItem, EventsByDate} from "../models/event-list.model";
import {ShoppingCart} from "../models/shopping-cart.model";

@Injectable({
    providedIn: "root"
})
export class DataRepositoryService {
    allEventItems = {} as EventsByDate;
    tmpAllEventItems = {} as EventsByDate;
    allCartItems = {} as ShoppingCart;

    constructor() {
    }

    public async initAllEvents() {
        const data: EventsByDate = this.sortDataByDate(await this.getDummyData());
        this.allEventItems = data;
        this.tmpAllEventItems = data;
        this.allCartItems.items = [];
    }

    sortDataByDate(data: EventItem[]): any {
        function groupEventsByDate(events: any[]): { [key: string]: any[] } {
            const groupedEvents: { [key: string]: any[] } = {};

            // Durchlaufe die Events und gruppiere sie nach Datum
            events.forEach((event) => {
                const date = event.date.split("T")[0]; // Extrahiere das Datum ohne Uhrzeit
                event.date = date;
                if (!groupedEvents[date]) {
                    // Wenn das Datum noch nicht im Objekt existiert, erstelle ein leeres Array dafür
                    groupedEvents[date] = [];
                }
                // Füge das Event zum entsprechenden Datum hinzu
                groupedEvents[date].push(event);
            });

            return groupedEvents;
        }

        return groupEventsByDate(data);
    }

    private getDummyData(): Promise<EventItem[]> {
        return new Promise((resolve, reject) => {
            const data: EventItem[] = [
                {
                    "_id": "1463949",
                    "title": "Fuego! with Om Unit, Ruby Savage, Iration Steppas, Jamie Rodigan, Pete OTC, Makin' Moves..",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1463949-1809552-front.jpg?dateUpdated=1634114327453",
                    "attending": 62,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T18:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1463949",
                    "venue": {
                        "id": "185559",
                        "name": "Colour Factory",
                        "contentUrl": "/clubs/185559",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14635",
                        "blurb": "Now here's a lineup well-suited to a fully stacked rig. Dub meets jungle, dancehall and all sorts of other flavours at the intersection of sound system culture."
                    },
                    "artists": [
                        {
                            "id": "28072",
                            "name": "Iration Steppas",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d10"
                            }
                        },
                        {
                            "id": "33135",
                            "name": "Om Unit",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d11"
                            }
                        },
                        {
                            "id": "70700",
                            "name": "Jamie Rodigan",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d12"
                            }
                        },
                        {
                            "id": "81974",
                            "name": "Ruby Savage",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d13"
                            }
                        },
                        {
                            "id": "85880",
                            "name": "Tommy Castro",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d14"
                            }
                        },
                        {
                            "id": "91376",
                            "name": "Pete On the Corner",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d15"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471111",
                    "title": "Venue MOT: Allecto, Jim Janco, mi-el, Childless Sluts, Rory K",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1471111-0-front.jpg?dateUpdated=1633897511260",
                    "attending": 10,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T07:00:00.000",
                    "contentUrl": "/events/1471111",
                    "venue": {
                        "id": "156290",
                        "name": "Venue MOT Unit 18",
                        "contentUrl": "/clubs/156290",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14636",
                        "blurb": "The latest offering from the South Bermondsey sweet spot is as tasty as ever."
                    },
                    "artists": [
                        {
                            "id": "94197",
                            "name": "Jim Janco",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d16"
                            }
                        },
                        {
                            "id": "96559",
                            "name": "susu laroche",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d17"
                            }
                        },
                        {
                            "id": "102174",
                            "name": "Mi-El",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d18"
                            }
                        },
                        {
                            "id": "102179",
                            "name": "Allecto",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d19"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471284",
                    "title": "Eliza Rose 4 Hour set",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1471284-front.jpg?dateUpdated=1633951916030",
                    "attending": 2,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T18:00:00.000",
                    "endTime": "2021-10-17T22:00:00.000",
                    "contentUrl": "/events/1471284",
                    "venue": {
                        "id": "3393",
                        "name": "Cafe 1001",
                        "contentUrl": "/clubs/3393",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14637",
                        "blurb": "An apt selector for an extended session, the depth of Eliza Rose's record bag is always worth witnessing."
                    },
                    "artists": [
                        {
                            "id": "85975",
                            "name": "Eliza Rose",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d1a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1456335",
                    "title": "Effy presents A Slice Of Reality",
                    "attending": 4,
                    "date": "2021-11-13T00:00:00.000",
                    "contentUrl": "/events/1456335",
                    "venue": {
                        "id": "174167",
                        "name": "Werkhaus",
                        "contentUrl": "/clubs/174167",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14640",
                        "blurb": "Northern powerhouse Effy brings big-room house and techno to the intimate Brick Lane venue Werkhaus."
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464796",
                    "title": "Chrome: Kelman Duran + TTB + Kemarr + Mobbs + Felix Hall",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1464796-front.jpg?dateUpdated=1631693900910",
                    "attending": 20,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1464796",
                    "venue": {
                        "id": "144451",
                        "name": "Tola",
                        "contentUrl": "/clubs/144451",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14634",
                        "blurb": "Ooof, certified heat incoming. This lot will be keeping it chuggy and clubby."
                    },
                    "artists": [
                        {
                            "id": "83841",
                            "name": "Felix Hall",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d1b"
                            }
                        },
                        {
                            "id": "84708",
                            "name": "Kelman Duran",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d1c"
                            }
                        },
                        {
                            "id": "94760",
                            "name": "Mobbs",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d1d"
                            }
                        },
                        {
                            "id": "97777",
                            "name": "Kemarr",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d1e"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468214",
                    "title": "Accidental Meetings: Minor Science, Object Blue b2b ???, Metrist b2b ???, Angel Rocket & i-sha",
                    "attending": 47,
                    "date": "2021-11-27T00:00:00.000",
                    "contentUrl": "/events/1468214",
                    "venue": {
                        "id": "156290",
                        "name": "Venue MOT Unit 18",
                        "contentUrl": "/clubs/156290",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14638",
                        "blurb": "The Brighton posse head to South London armed with a cracking line up of club floor controllers and surprise b2bs."
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1444489",
                    "title": "Stump Extended 21hrs - E1 & Fold",
                    "attending": 160,
                    "date": "2021-11-20T00:00:00.000",
                    "contentUrl": "/events/1444489",
                    "venue": {
                        "id": "141756",
                        "name": "E1",
                        "contentUrl": "/clubs/141756",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14630",
                        "blurb": "Stump brings some of the finest purveyors of Romanian minimal to E1. Expect rolling grooves and atmospheric shufflers from Petre Inspirescu, Mihai, Suciu and a TBA guest."
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468378",
                    "title": "Tech Couture // Matrixxman, Setaoc Mass, Tasha",
                    "attending": 74,
                    "date": "2021-11-12T00:00:00.000",
                    "contentUrl": "/events/1468378",
                    "venue": {
                        "id": "155399",
                        "name": "FOLD",
                        "contentUrl": "/clubs/155399",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14628",
                        "blurb": "Tech Couture has assembled a lineup of dark, moody techno for their debut at FOLD, featuring Matrixxman and Neighbourhood boss Tasha. "
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469414",
                    "title": "Everpress pres. HIGHPASS: BOK BOK, k means, Toma Kami, Henzo",
                    "attending": 50,
                    "date": "2021-10-29T00:00:00.000",
                    "contentUrl": "/events/1469414",
                    "venue": {
                        "id": "177013",
                        "name": "Space 289",
                        "contentUrl": "/clubs/177013",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14612",
                        "blurb": "HIGHPASS and Everpress present an array of percussive, avant-garde bass music. Bok Bok leads the line alongside Livity Sound's Toma Kami, Noods Radio's k means and Henzo of Worldwide Unlimited."
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1461644",
                    "title": "Tratratrax X OS Community",
                    "attending": 33,
                    "date": "2021-10-29T00:00:00.000",
                    "contentUrl": "/events/1461644",
                    "venue": {
                        "id": "156290",
                        "name": "Venue MOT Unit 18",
                        "contentUrl": "/clubs/156290",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14616",
                        "blurb": "Colombia meets South London at this celebration of UK and Latino club music. Expect bags and bags of energy."
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1445834",
                    "title": "Sat: Club I Boiler Room Festival London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1445834-1809323-front.jpg?dateUpdated=1634076086917",
                    "attending": 1148,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T14:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1445834",
                    "venue": {
                        "id": "150005",
                        "name": "The Cause",
                        "contentUrl": "/clubs/150005",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "33212",
                            "name": "Bradley Zero",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d1f"
                            }
                        },
                        {
                            "id": "34149",
                            "name": "Shayn",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d20"
                            }
                        },
                        {
                            "id": "42909",
                            "name": "Flora Yin-Wong",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d21"
                            }
                        },
                        {
                            "id": "44868",
                            "name": "Anetha",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d22"
                            }
                        },
                        {
                            "id": "58477",
                            "name": "Manara",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d23"
                            }
                        },
                        {
                            "id": "58850",
                            "name": "Parfait",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d24"
                            }
                        },
                        {
                            "id": "59287",
                            "name": "Nyksan",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d25"
                            }
                        },
                        {
                            "id": "62240",
                            "name": "Basic Rhythm",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d26"
                            }
                        },
                        {
                            "id": "62286",
                            "name": "JASSS",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d27"
                            }
                        },
                        {
                            "id": "67926",
                            "name": "False Witness",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d28"
                            }
                        },
                        {
                            "id": "72212",
                            "name": "Shannen SP",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d29"
                            }
                        },
                        {
                            "id": "72313",
                            "name": "PANDORA'S JUKEBOX",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d2a"
                            }
                        },
                        {
                            "id": "73042",
                            "name": "Cici",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d2b"
                            }
                        },
                        {
                            "id": "73940",
                            "name": "Carista",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d2c"
                            }
                        },
                        {
                            "id": "84458",
                            "name": "Nino Brown",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d2d"
                            }
                        },
                        {
                            "id": "84801",
                            "name": "Bambii",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d2e"
                            }
                        },
                        {
                            "id": "85986",
                            "name": "Kikelomo",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d2f"
                            }
                        },
                        {
                            "id": "88121",
                            "name": "Yung Singh",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d30"
                            }
                        },
                        {
                            "id": "89686",
                            "name": "MarcelDune",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d31"
                            }
                        },
                        {
                            "id": "100192",
                            "name": "Lady Shaka",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d32"
                            }
                        },
                        {
                            "id": "102162",
                            "name": "Gracie T",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d33"
                            }
                        },
                        {
                            "id": "102591",
                            "name": "Brutalismus 3000",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d34"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1461099",
                    "title": "Space Ibiza - Day & Night Party with Roger Sanchez, Yousef, Secondcity",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1461099-1811409-front.jpg?dateUpdated=1634048006963",
                    "attending": 1120,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T16:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1461099",
                    "venue": {
                        "id": "74592",
                        "name": "Studio 338",
                        "contentUrl": "/clubs/74592",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "46",
                            "name": "Roger Sanchez",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d35"
                            }
                        },
                        {
                            "id": "83",
                            "name": "Yousef",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d36"
                            }
                        },
                        {
                            "id": "11039",
                            "name": "Javi Bora",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d37"
                            }
                        },
                        {
                            "id": "48372",
                            "name": "Secondcity",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d38"
                            }
                        },
                        {
                            "id": "53772",
                            "name": "Jess Bays",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d39"
                            }
                        },
                        {
                            "id": "75934",
                            "name": "Andrew Kay",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d3a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1457670",
                    "title": "FABRICLIVE: MYD, Leo Pol, Black Loops, Adryiano, Harrison BDP & More",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1457670-1804304-front.jpg?dateUpdated=1633353766453",
                    "attending": 1033,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1457670",
                    "venue": {
                        "id": "237",
                        "name": "fabric",
                        "contentUrl": "/clubs/237",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "6207",
                            "name": "Adryiano",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d3b"
                            }
                        },
                        {
                            "id": "9223",
                            "name": "Myd",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d3c"
                            }
                        },
                        {
                            "id": "39649",
                            "name": "Leo Pol",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d3d"
                            }
                        },
                        {
                            "id": "56544",
                            "name": "Black Loops",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d3e"
                            }
                        },
                        {
                            "id": "57069",
                            "name": "Joe Corti",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d3f"
                            }
                        },
                        {
                            "id": "58489",
                            "name": "Tommy Vercetti",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d40"
                            }
                        },
                        {
                            "id": "69428",
                            "name": "Liam Palmer",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d41"
                            }
                        },
                        {
                            "id": "71814",
                            "name": "Elliot Schooling",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d42"
                            }
                        },
                        {
                            "id": "76688",
                            "name": "Harrison BDP",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d43"
                            }
                        },
                        {
                            "id": "82183",
                            "name": "Marina Trench",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d44"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1445814",
                    "title": "Thu: Rap Fantasy I Boiler Room Festival London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1445814-1809344-front.jpg?dateUpdated=1634076156087",
                    "attending": 911,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T19:00:00.000",
                    "endTime": "2021-10-15T01:00:00.000",
                    "contentUrl": "/events/1445814",
                    "venue": {
                        "id": "150005",
                        "name": "The Cause",
                        "contentUrl": "/clubs/150005",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "66360",
                            "name": "Mechatok",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d45"
                            }
                        },
                        {
                            "id": "85512",
                            "name": "p-rallel",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d46"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1445833",
                    "title": "Fri: System Sound I Boiler Room Festival London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1445833-1809345-front.jpg?dateUpdated=1634076116997",
                    "attending": 889,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1445833",
                    "venue": {
                        "id": "150005",
                        "name": "The Cause",
                        "contentUrl": "/clubs/150005",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "8227",
                            "name": "Yosh",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d47"
                            }
                        },
                        {
                            "id": "12609",
                            "name": "Nicky Blackmarket",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d48"
                            }
                        },
                        {
                            "id": "15728",
                            "name": "Agent K",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d49"
                            }
                        },
                        {
                            "id": "61716",
                            "name": "MC GQ",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d4a"
                            }
                        },
                        {
                            "id": "62312",
                            "name": "Kenny Ken",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d4b"
                            }
                        },
                        {
                            "id": "62321",
                            "name": "The Ragga Twins",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d4c"
                            }
                        },
                        {
                            "id": "64438",
                            "name": "Lady Passion",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d4d"
                            }
                        },
                        {
                            "id": "64441",
                            "name": "DJ Perception",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d4e"
                            }
                        },
                        {
                            "id": "64841",
                            "name": "MC Det",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d4f"
                            }
                        },
                        {
                            "id": "65035",
                            "name": "Funky Flirt",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d50"
                            }
                        },
                        {
                            "id": "65906",
                            "name": "Jamz Supernova",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d51"
                            }
                        },
                        {
                            "id": "66682",
                            "name": "Hagan",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d52"
                            }
                        },
                        {
                            "id": "67564",
                            "name": "DJ LAG",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d53"
                            }
                        },
                        {
                            "id": "80898",
                            "name": "Double O",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d54"
                            }
                        },
                        {
                            "id": "85092",
                            "name": "T Dunn",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d55"
                            }
                        },
                        {
                            "id": "88668",
                            "name": "Dale Mussington",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d56"
                            }
                        },
                        {
                            "id": "93462",
                            "name": "Jamie G",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d57"
                            }
                        },
                        {
                            "id": "93496",
                            "name": "Decibella",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d58"
                            }
                        },
                        {
                            "id": "93772",
                            "name": "Manuka Honey",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d59"
                            }
                        },
                        {
                            "id": "97376",
                            "name": "Tim Reaper",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d5a"
                            }
                        },
                        {
                            "id": "102006",
                            "name": "Sheba Q",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d5b"
                            }
                        },
                        {
                            "id": "102804",
                            "name": "MYKOOL",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d5c"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1457627",
                    "title": "fabric presents: Maribou State",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1457627-front.jpg?dateUpdated=1632216307247",
                    "attending": 782,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T16:00:00.000",
                    "endTime": "2021-10-18T00:00:00.000",
                    "contentUrl": "/events/1457627",
                    "venue": {
                        "id": "237",
                        "name": "fabric",
                        "contentUrl": "/clubs/237",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "36523",
                            "name": "Maribou State",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d5d"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1456604",
                    "title": "fabric: Bedrock - John Digweed (5 Hours), Lost Desert, Man Power & More",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1456604-1791996-front.jpg?dateUpdated=1633016436887",
                    "attending": 547,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T07:00:00.000",
                    "contentUrl": "/events/1456604",
                    "venue": {
                        "id": "237",
                        "name": "fabric",
                        "contentUrl": "/clubs/237",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "5",
                            "name": "John Digweed",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d5e"
                            }
                        },
                        {
                            "id": "44965",
                            "name": "Man Power",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d5f"
                            }
                        },
                        {
                            "id": "45184",
                            "name": "Lord Of The Isles",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d60"
                            }
                        },
                        {
                            "id": "69130",
                            "name": "Lost Desert",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d61"
                            }
                        },
                        {
                            "id": "73042",
                            "name": "Cici",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d62"
                            }
                        },
                        {
                            "id": "84571",
                            "name": "Vyvyan",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d63"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1458954",
                    "title": "Conference of Birds with Mira, YokoO, Birds of Mind and Chris Schwarzwälder",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1458954-front.jpg?dateUpdated=1633947002653",
                    "attending": 526,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:30:00.000",
                    "contentUrl": "/events/1458954",
                    "venue": {
                        "id": "9305",
                        "name": "229 The Venue",
                        "contentUrl": "/clubs/9305",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "6903",
                            "name": "YokoO",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d64"
                            }
                        },
                        {
                            "id": "8242",
                            "name": "Mira",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d65"
                            }
                        },
                        {
                            "id": "22258",
                            "name": "Chris Schwarzwälder",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d66"
                            }
                        },
                        {
                            "id": "67229",
                            "name": "Birds of Mind",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d67"
                            }
                        },
                        {
                            "id": "75165",
                            "name": "Sacha Yonan",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d68"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1440750",
                    "title": "Kampire + KG + Bambii + K2RAH",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1440750-1812201-front.jpg?dateUpdated=1634121335293",
                    "attending": 518,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1440750",
                    "venue": {
                        "id": "4567",
                        "name": "Village Underground",
                        "contentUrl": "/clubs/4567",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14390",
                        "blurb": "Three killer selectors with a taste for diasporic club sounds and percussive heaters, each in their own way."
                    },
                    "artists": [
                        {
                            "id": "67213",
                            "name": "K2RAH",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d69"
                            }
                        },
                        {
                            "id": "76354",
                            "name": "Kampire",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d6a"
                            }
                        },
                        {
                            "id": "84801",
                            "name": "Bambii",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d6b"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462632",
                    "title": "The Alchemist",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1462632-front.jpg?dateUpdated=1632930657740",
                    "attending": 515,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:30:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1462632",
                    "venue": {
                        "id": "1502",
                        "name": "The Jazz Cafe",
                        "contentUrl": "/clubs/1502",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "62834",
                            "name": "The Alchemist",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d6c"
                            }
                        },
                        {
                            "id": "81640",
                            "name": "Dom Servini",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d6d"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1446177",
                    "title": "Boiler Room Festival London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1013-1446177-1809341-front.jpg?dateUpdated=1634054771790",
                    "attending": 3454,
                    "date": "2021-10-13T00:00:00.000",
                    "startTime": "2021-10-13T19:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1446177",
                    "venue": {
                        "id": "150005",
                        "name": "The Cause",
                        "contentUrl": "/clubs/150005",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "8227",
                            "name": "Yosh",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d6e"
                            }
                        },
                        {
                            "id": "12609",
                            "name": "Nicky Blackmarket",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d6f"
                            }
                        },
                        {
                            "id": "15728",
                            "name": "Agent K",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d70"
                            }
                        },
                        {
                            "id": "33212",
                            "name": "Bradley Zero",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d71"
                            }
                        },
                        {
                            "id": "34149",
                            "name": "Shayn",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d72"
                            }
                        },
                        {
                            "id": "42909",
                            "name": "Flora Yin-Wong",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d73"
                            }
                        },
                        {
                            "id": "44868",
                            "name": "Anetha",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d74"
                            }
                        },
                        {
                            "id": "58477",
                            "name": "Manara",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d75"
                            }
                        },
                        {
                            "id": "58850",
                            "name": "Parfait",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d76"
                            }
                        },
                        {
                            "id": "59287",
                            "name": "Nyksan",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d77"
                            }
                        },
                        {
                            "id": "61716",
                            "name": "MC GQ",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d78"
                            }
                        },
                        {
                            "id": "62240",
                            "name": "Basic Rhythm",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d79"
                            }
                        },
                        {
                            "id": "62286",
                            "name": "JASSS",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d7a"
                            }
                        },
                        {
                            "id": "62312",
                            "name": "Kenny Ken",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d7b"
                            }
                        },
                        {
                            "id": "62321",
                            "name": "The Ragga Twins",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d7c"
                            }
                        },
                        {
                            "id": "64438",
                            "name": "Lady Passion",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d7d"
                            }
                        },
                        {
                            "id": "64441",
                            "name": "DJ Perception",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d7e"
                            }
                        },
                        {
                            "id": "64841",
                            "name": "MC Det",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d7f"
                            }
                        },
                        {
                            "id": "65035",
                            "name": "Funky Flirt",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d80"
                            }
                        },
                        {
                            "id": "65906",
                            "name": "Jamz Supernova",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d81"
                            }
                        },
                        {
                            "id": "66360",
                            "name": "Mechatok",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d82"
                            }
                        },
                        {
                            "id": "66682",
                            "name": "Hagan",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d83"
                            }
                        },
                        {
                            "id": "67564",
                            "name": "DJ LAG",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d84"
                            }
                        },
                        {
                            "id": "67926",
                            "name": "False Witness",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d85"
                            }
                        },
                        {
                            "id": "72212",
                            "name": "Shannen SP",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d86"
                            }
                        },
                        {
                            "id": "72313",
                            "name": "PANDORA'S JUKEBOX",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d87"
                            }
                        },
                        {
                            "id": "73042",
                            "name": "Cici",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d88"
                            }
                        },
                        {
                            "id": "73940",
                            "name": "Carista",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d89"
                            }
                        },
                        {
                            "id": "80898",
                            "name": "Double O",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d8a"
                            }
                        },
                        {
                            "id": "84458",
                            "name": "Nino Brown",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d8b"
                            }
                        },
                        {
                            "id": "85092",
                            "name": "T Dunn",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d8c"
                            }
                        },
                        {
                            "id": "85141",
                            "name": "Zakia",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d8d"
                            }
                        },
                        {
                            "id": "85512",
                            "name": "p-rallel",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d8e"
                            }
                        },
                        {
                            "id": "85986",
                            "name": "Kikelomo",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d8f"
                            }
                        },
                        {
                            "id": "88121",
                            "name": "Yung Singh",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d90"
                            }
                        },
                        {
                            "id": "88668",
                            "name": "Dale Mussington",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d91"
                            }
                        },
                        {
                            "id": "93462",
                            "name": "Jamie G",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d92"
                            }
                        },
                        {
                            "id": "93496",
                            "name": "Decibella",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d93"
                            }
                        },
                        {
                            "id": "93772",
                            "name": "Manuka Honey",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d94"
                            }
                        },
                        {
                            "id": "97376",
                            "name": "Tim Reaper",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d95"
                            }
                        },
                        {
                            "id": "100192",
                            "name": "Lady Shaka",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d96"
                            }
                        },
                        {
                            "id": "102006",
                            "name": "Sheba Q",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d97"
                            }
                        },
                        {
                            "id": "102162",
                            "name": "Gracie T",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d98"
                            }
                        },
                        {
                            "id": "102591",
                            "name": "Brutalismus 3000",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d99"
                            }
                        },
                        {
                            "id": "102804",
                            "name": "MYKOOL",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d9a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465651",
                    "title": "Cosmic Tiger: Thursday Party - First 300 Tickets Free (Must Claim Online)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1465651-front.jpg?dateUpdated=1633890953293",
                    "attending": 111,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T23:00:00.000",
                    "endTime": "2021-10-15T04:00:00.000",
                    "contentUrl": "/events/1465651",
                    "venue": {
                        "id": "874",
                        "name": "Egg London",
                        "contentUrl": "/clubs/874",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471918",
                    "title": "Orange Yard Terrace Sessions",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1471918-1813148-front.jpg?dateUpdated=1634203914050",
                    "attending": 89,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T22:00:00.000",
                    "endTime": "2021-10-15T04:00:00.000",
                    "contentUrl": "/events/1471918",
                    "venue": {
                        "id": "176870",
                        "name": "Orange Yard",
                        "contentUrl": "/clubs/176870",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1426509",
                    "title": "dollop Presents: OKLOU",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/3/uk-0302-1426509-front.jpg?dateUpdated=1614333856660",
                    "attending": 35,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T19:00:00.000",
                    "endTime": "2021-10-14T23:00:00.000",
                    "contentUrl": "/events/1426509",
                    "venue": {
                        "id": "937",
                        "name": "Electrowerkz",
                        "contentUrl": "/clubs/937",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "79648",
                            "name": "Oklou",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d9b"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1445880",
                    "title": "Poté + Tash LC",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1445880-1798173-front.jpg?dateUpdated=1632303401650",
                    "attending": 19,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T19:00:00.000",
                    "endTime": "2021-10-14T22:30:00.000",
                    "contentUrl": "/events/1445880",
                    "venue": {
                        "id": "1502",
                        "name": "The Jazz Cafe",
                        "contentUrl": "/clubs/1502",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "65432",
                            "name": "Tash LC",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d9c"
                            }
                        },
                        {
                            "id": "65451",
                            "name": "Poté",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d9d"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471353",
                    "title": "Peaky Beats live with Holloway, Nancy June & Citizen",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1471353-0-front.jpg?dateUpdated=1633965710760",
                    "attending": 17,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T18:00:00.000",
                    "endTime": "2021-10-14T23:00:00.000",
                    "contentUrl": "/events/1471353",
                    "venue": {
                        "id": "190735",
                        "name": "Next Door Records",
                        "contentUrl": "/clubs/190735",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "88117",
                            "name": "Holloway",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d9e"
                            }
                        },
                        {
                            "id": "103480",
                            "name": "Nancy June",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21d9f"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469220",
                    "title": "Seaside Events Chapter 1",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1469220-front.jpg?dateUpdated=1633357862887",
                    "attending": 12,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T21:00:00.000",
                    "endTime": "2021-10-15T04:00:00.000",
                    "contentUrl": "/events/1469220",
                    "venue": {
                        "id": "181160",
                        "name": "Dalston Den",
                        "contentUrl": "/clubs/181160",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "102130",
                            "name": "Riccardo F",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da0"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468231",
                    "title": "Patterns Live Jazz: in the Loft",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1468231-front.jpg?dateUpdated=1632912188437",
                    "attending": 6,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T17:00:00.000",
                    "endTime": "2021-10-14T23:00:00.000",
                    "contentUrl": "/events/1468231",
                    "venue": {
                        "id": "115524",
                        "name": "NT's Loft",
                        "contentUrl": "/clubs/115524",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1470762",
                    "title": "NSFW London Rave at Scala - 14th Oct // Nicky Blackmarket // Devilman",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1470762-front.jpg?dateUpdated=1633827089500",
                    "attending": 2,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T23:00:00.000",
                    "endTime": "2021-10-15T04:00:00.000",
                    "contentUrl": "/events/1470762",
                    "venue": {
                        "id": "3321",
                        "name": "The Scala",
                        "contentUrl": "/clubs/3321",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "12609",
                            "name": "Nicky Blackmarket",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da1"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1470863",
                    "title": "Planningtorock",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1470863-front.jpg?dateUpdated=1633706837960",
                    "attending": 2,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T19:30:00.000",
                    "endTime": "2021-10-14T23:00:00.000",
                    "contentUrl": "/events/1470863",
                    "venue": {
                        "id": "3321",
                        "name": "The Scala",
                        "contentUrl": "/clubs/3321",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "13150",
                            "name": "Planningtorock",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da2"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1452731",
                    "title": "Blasio Kavuma: Jungle // feat. TOM Mason, Suitman Jungle and Cecilia Bignall",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1452731-front.jpg?dateUpdated=1634039887043",
                    "attending": 5,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T19:30:00.000",
                    "endTime": "2021-10-14T23:00:00.000",
                    "contentUrl": "/events/1452731",
                    "venue": {
                        "id": "177013",
                        "name": "Space 289",
                        "contentUrl": "/clubs/177013",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "61946",
                            "name": "Chris Inperspective",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da3"
                            }
                        },
                        {
                            "id": "93496",
                            "name": "Decibella",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da4"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468303",
                    "title": "YOUR MUM'S HOUSE",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1468303-front.jpg?dateUpdated=1632932598037",
                    "attending": 5,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T22:00:00.000",
                    "endTime": "2021-10-15T03:00:00.000",
                    "contentUrl": "/events/1468303",
                    "venue": {
                        "id": "33592",
                        "name": "XOYO",
                        "contentUrl": "/clubs/33592",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "88894",
                            "name": "Hugo Mari",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da5"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466352",
                    "title": "'Statement of Intent' - Exhibition Private View",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1466352-front.jpg?dateUpdated=1632267990767",
                    "attending": 2,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T18:00:00.000",
                    "endTime": "2021-10-14T21:00:00.000",
                    "contentUrl": "/events/1466352",
                    "venue": {
                        "id": "177020",
                        "name": "Bsmt Space",
                        "contentUrl": "/clubs/177020",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "52323",
                            "name": "Milu",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da6"
                            }
                        },
                        {
                            "id": "90557",
                            "name": "SNIK",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da7"
                            }
                        },
                        {
                            "id": "92510",
                            "name": "KMG",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da8"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1470092",
                    "title": "AGM 2021",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1470092-front.jpg?dateUpdated=1633530458037",
                    "attending": 2,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T19:00:00.000",
                    "endTime": "2021-10-14T23:00:00.000",
                    "contentUrl": "/events/1470092",
                    "venue": {
                        "id": "5383",
                        "name": "Somerset House",
                        "contentUrl": "/clubs/5383",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "45413",
                            "name": "DJ Nigga Fox",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21da9"
                            }
                        },
                        {
                            "id": "94441",
                            "name": "Latent",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21daa"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466792",
                    "title": "Ronnie Loko presents Lokomotive",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1014-1466792-0-front.jpg?dateUpdated=1632414619830",
                    "attending": 1,
                    "date": "2021-10-14T00:00:00.000",
                    "startTime": "2021-10-14T19:00:00.000",
                    "endTime": "2021-10-15T01:00:00.000",
                    "contentUrl": "/events/1466792",
                    "venue": {
                        "id": "133362",
                        "name": "Boxpark Croydon",
                        "contentUrl": "/clubs/133362",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "56019",
                            "name": "Ronnie Loko",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dab"
                            }
                        },
                        {
                            "id": "66307",
                            "name": "Angela Rose",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dac"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471470",
                    "title": "Nu Jazz Generations with Tommy Remon Quartet (Live), Free Entry",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1013-1471470-front.jpg?dateUpdated=1633977911437",
                    "attending": 0,
                    "date": "2021-10-13T00:00:00.000",
                    "startTime": "2021-10-13T19:00:00.000",
                    "endTime": "2021-10-14T23:00:00.000",
                    "contentUrl": "/events/1471470",
                    "venue": {
                        "id": "172847",
                        "name": "CLF Art Lounge & Roof Garden",
                        "contentUrl": "/clubs/172847",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "26968",
                            "name": "Mikele",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dad"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467047",
                    "title": "E1 presents: Danny Tenaglia (Extended Set)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467047-1807587-front.jpg?dateUpdated=1633538631293",
                    "attending": 464,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1467047",
                    "venue": {
                        "id": "141756",
                        "name": "E1",
                        "contentUrl": "/clubs/141756",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "24",
                            "name": "Danny Tenaglia",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dae"
                            }
                        },
                        {
                            "id": "52062",
                            "name": "Ricky Morrison",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21daf"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1446405",
                    "title": "Levitate London presents Monkey Safari",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1446405-front.jpg?dateUpdated=1630493001090",
                    "attending": 330,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1446405",
                    "venue": {
                        "id": "176870",
                        "name": "Orange Yard",
                        "contentUrl": "/clubs/176870",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "12398",
                            "name": "Monkey Safari",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db0"
                            }
                        },
                        {
                            "id": "77996",
                            "name": "Janoko",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db1"
                            }
                        },
                        {
                            "id": "101620",
                            "name": "Tr^s",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db2"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1450277",
                    "title": "Materials: Dr Banana, Izco b2b Bailey Ibbs, Nia Archives & More",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1450277-1803945-front.jpg?dateUpdated=1633026867640",
                    "attending": 315,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1450277",
                    "venue": {
                        "id": "2587",
                        "name": "Corsica Studios",
                        "contentUrl": "/clubs/2587",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "74857",
                            "name": "Equus",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db3"
                            }
                        },
                        {
                            "id": "75036",
                            "name": "Jay Carder",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db4"
                            }
                        },
                        {
                            "id": "78701",
                            "name": "Bailey Ibbs",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db5"
                            }
                        },
                        {
                            "id": "85332",
                            "name": "Dr Banana",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db6"
                            }
                        },
                        {
                            "id": "85337",
                            "name": "Pluralist",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db7"
                            }
                        },
                        {
                            "id": "89608",
                            "name": "Izco",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db8"
                            }
                        },
                        {
                            "id": "97140",
                            "name": "bacchus",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21db9"
                            }
                        },
                        {
                            "id": "98203",
                            "name": "Eich",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dba"
                            }
                        },
                        {
                            "id": "99698",
                            "name": "Frazer Ray",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dbb"
                            }
                        },
                        {
                            "id": "102000",
                            "name": "Nia Archives",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dbc"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1456801",
                    "title": "DjRUM [4 Fridays at Phonox] b2b LCY",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1456801-0-front.jpg?dateUpdated=1633601669610",
                    "attending": 306,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:30:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1456801",
                    "venue": {
                        "id": "106730",
                        "name": "Phonox",
                        "contentUrl": "/clubs/106730",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "31060",
                            "name": "DjRUM",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dbd"
                            }
                        },
                        {
                            "id": "79207",
                            "name": "LCY",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dbe"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465883",
                    "title": "Fridays at EGG: Future Sound (London) (Free Entry, Tickets Must be Claimed Online)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1465883-1810445-front.jpg?dateUpdated=1633969996373",
                    "attending": 297,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1465883",
                    "venue": {
                        "id": "874",
                        "name": "Egg London",
                        "contentUrl": "/clubs/874",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "74059",
                            "name": "Terri-Anne",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dbf"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465080",
                    "title": "Dysfunctional: Free Tickets",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1465080-front.jpg?dateUpdated=1634206002773",
                    "attending": 264,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1465080",
                    "venue": {
                        "id": "30015",
                        "name": "Basing House",
                        "contentUrl": "/clubs/30015",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "8388",
                            "name": "James Damian",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc0"
                            }
                        },
                        {
                            "id": "40569",
                            "name": "Jay Nino",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc1"
                            }
                        },
                        {
                            "id": "50303",
                            "name": "Louie B",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc2"
                            }
                        },
                        {
                            "id": "50796",
                            "name": "DJ Sculpture",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc3"
                            }
                        },
                        {
                            "id": "53993",
                            "name": "Anton Morales",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc4"
                            }
                        },
                        {
                            "id": "89441",
                            "name": "Art e Fect",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc5"
                            }
                        },
                        {
                            "id": "101515",
                            "name": "Brett Holmes",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc6"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1458543",
                    "title": "Moon Coral 8: Bruno Schmidt, Joe Delon & Kyle Toole",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1458543-1779369-front.jpg?dateUpdated=1633806506720",
                    "attending": 254,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T07:00:00.000",
                    "contentUrl": "/events/1458543",
                    "venue": {
                        "id": "156290",
                        "name": "Venue MOT Unit 18",
                        "contentUrl": "/clubs/156290",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "21280",
                            "name": "Bruno Schmidt",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc7"
                            }
                        },
                        {
                            "id": "68986",
                            "name": "Joe Delon",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc8"
                            }
                        },
                        {
                            "id": "88140",
                            "name": "Moon Coral",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dc9"
                            }
                        },
                        {
                            "id": "92090",
                            "name": "Kyle Toole",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dca"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464557",
                    "title": "Percolate presents: Soichi Terada Live, Asakusa Light Tour",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1464557-1797336-front.jpg?dateUpdated=1634129457643",
                    "attending": 173,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1464557",
                    "venue": {
                        "id": "174167",
                        "name": "Werkhaus",
                        "contentUrl": "/clubs/174167",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "58600",
                            "name": "Soichi Terada",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dcb"
                            }
                        },
                        {
                            "id": "66991",
                            "name": "anu",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dcc"
                            }
                        },
                        {
                            "id": "73289",
                            "name": "High Hoops",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dcd"
                            }
                        },
                        {
                            "id": "85690",
                            "name": "Manami",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dce"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1458171",
                    "title": "Night Tales: Shonky [All Night Long]",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1458171-1790381-front.jpg?dateUpdated=1631116344337",
                    "attending": 161,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T18:00:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1458171",
                    "venue": {
                        "id": "155586",
                        "name": "Night Tales",
                        "contentUrl": "/clubs/155586",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "1584",
                            "name": "Shonky",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dcf"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464445",
                    "title": "Breakbot at Colour Factory",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1464445-1806626-front.jpg?dateUpdated=1633975281437",
                    "attending": 157,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1464445",
                    "venue": {
                        "id": "185559",
                        "name": "Colour Factory",
                        "contentUrl": "/clubs/185559",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "17310",
                            "name": "Breakbot",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dd0"
                            }
                        },
                        {
                            "id": "68981",
                            "name": "The Iron Glove",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dd1"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467029",
                    "title": "Boudica: 2nd Bday with Peachlyfe, Samantha Togni, Alba Heidari, Montgomery Gurns and Anilian",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467029-1799724-front.jpg?dateUpdated=1634204083800",
                    "attending": 137,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1467029",
                    "venue": {
                        "id": "95767",
                        "name": "The Pickle Factory",
                        "contentUrl": "/clubs/95767",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14571",
                        "blurb": "The Boudica collective celebrates its second birthday, bringing pacy techno and dark, trippy rhythms to The Pickle Factory."
                    },
                    "artists": [
                        {
                            "id": "57553",
                            "name": "Alba Heidari",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dd2"
                            }
                        },
                        {
                            "id": "75389",
                            "name": "Samantha Togni",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dd3"
                            }
                        },
                        {
                            "id": "96813",
                            "name": "Peachlyfe",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dd4"
                            }
                        },
                        {
                            "id": "103066",
                            "name": "Anilian",
                            "_id": {
                                "$oid": "625c40e396c7a90c87f21dd5"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466730",
                    "title": "Diggers Delight presents Disco'ntifada (Fundraiser for Lebanon)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1466730-1799101-front.jpg?dateUpdated=1633963138593",
                    "attending": 125,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1466730",
                    "venue": {
                        "id": "150325",
                        "name": "EartH",
                        "contentUrl": "/clubs/150325",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "46361",
                            "name": "Sam Karam",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dd6"
                            }
                        },
                        {
                            "id": "65016",
                            "name": "Milli",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dd7"
                            }
                        },
                        {
                            "id": "73148",
                            "name": "Jad Taleb",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dd8"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1451838",
                    "title": "Maple Cuts with Neil Landstrumm, Walton, Voicedrone b2b James Newmarch",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1451838-1782269-front.jpg?dateUpdated=1629836716910",
                    "attending": 95,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1451838",
                    "venue": {
                        "id": "156290",
                        "name": "Venue MOT Unit 18",
                        "contentUrl": "/clubs/156290",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "7117",
                            "name": "Neil Landstrumm",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dd9"
                            }
                        },
                        {
                            "id": "32708",
                            "name": "Walton",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dda"
                            }
                        },
                        {
                            "id": "59319",
                            "name": "Voicedrone",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21ddb"
                            }
                        },
                        {
                            "id": "78585",
                            "name": "James Newmarch",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21ddc"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1458447",
                    "title": "in the Loft x Silver Bear: 1-800 Girls, Wayward & System Olympia",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1458447-1797447-front.jpg?dateUpdated=1632477924977",
                    "attending": 84,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T17:00:00.000",
                    "endTime": "2021-10-16T02:30:00.000",
                    "contentUrl": "/events/1458447",
                    "venue": {
                        "id": "115524",
                        "name": "NT's Loft",
                        "contentUrl": "/clubs/115524",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "55420",
                            "name": "Wayward",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21ddd"
                            }
                        },
                        {
                            "id": "74834",
                            "name": "System Olympia",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dde"
                            }
                        },
                        {
                            "id": "83033",
                            "name": "1-800 GIRLS",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21ddf"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1463275",
                    "title": "Murky · Fresh Home · UK Rap x Drill x Hip Hop with Peter Xan (Live)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1463275-1790809-front.jpg?dateUpdated=1632822458213",
                    "attending": 72,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1463275",
                    "venue": {
                        "id": "1557",
                        "name": "Brixton Jamm",
                        "contentUrl": "/clubs/1557",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464267",
                    "title": "15 Years Of Yellow",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1464267-front.jpg?dateUpdated=1631613378703",
                    "attending": 66,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1464267",
                    "venue": {
                        "id": "174530",
                        "name": "Hatch Club",
                        "contentUrl": "/clubs/174530",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "15164",
                            "name": "Gavin Peters",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de0"
                            }
                        },
                        {
                            "id": "23914",
                            "name": "Tippa",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de1"
                            }
                        },
                        {
                            "id": "24504",
                            "name": "Teaser DJ",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de2"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462239",
                    "title": "Old World Blues - Launch Party with Peter Glasspool",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1462239-1801008-front.jpg?dateUpdated=1634049468827",
                    "attending": 48,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T20:30:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1462239",
                    "venue": {
                        "id": "181160",
                        "name": "Dalston Den",
                        "contentUrl": "/clubs/181160",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "7351",
                            "name": "Peter Glasspool",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de3"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467673",
                    "title": "Who's That?? Showcase with Special Guests and Residents",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467673-1807082-front.jpg?dateUpdated=1633523873120",
                    "attending": 45,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T18:00:00.000",
                    "endTime": "2021-10-16T02:00:00.000",
                    "contentUrl": "/events/1467673",
                    "venue": {
                        "id": "122921",
                        "name": "Lion and Lamb",
                        "contentUrl": "/clubs/122921",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "56145",
                            "name": "Tommy Martin",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de4"
                            }
                        },
                        {
                            "id": "57221",
                            "name": "Zach Murray",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de5"
                            }
                        },
                        {
                            "id": "63236",
                            "name": "MIINA",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de6"
                            }
                        },
                        {
                            "id": "68513",
                            "name": "Jhobei",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de7"
                            }
                        },
                        {
                            "id": "81032",
                            "name": "Louis Jay",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de8"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462289",
                    "title": "Dazed London",
                    "flyerFront": null,
                    "attending": 44,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T05:00:00.000",
                    "contentUrl": "/events/1462289",
                    "venue": {
                        "id": "52120",
                        "name": "Electric Brixton",
                        "contentUrl": "/clubs/52120",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "36186",
                            "name": "Skeptical",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21de9"
                            }
                        },
                        {
                            "id": "61628",
                            "name": "IC3",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dea"
                            }
                        },
                        {
                            "id": "62332",
                            "name": "SP:MC",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21deb"
                            }
                        },
                        {
                            "id": "64960",
                            "name": "General Levy",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dec"
                            }
                        },
                        {
                            "id": "79360",
                            "name": "Carasel",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21ded"
                            }
                        },
                        {
                            "id": "79372",
                            "name": "Bassman",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dee"
                            }
                        },
                        {
                            "id": "99784",
                            "name": "KARA (NL)",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21def"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467959",
                    "title": "Spiritland By Night: Colleen 'Cosmo' Murphy",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467959-1806466-front.jpg?dateUpdated=1633443019777",
                    "attending": 39,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T02:00:00.000",
                    "contentUrl": "/events/1467959",
                    "venue": {
                        "id": "172851",
                        "name": "Spiritland Royal Festival Hall",
                        "contentUrl": "/clubs/172851",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1460700",
                    "title": "Hardmatter presents: DJ Soch",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1460700-1798451-front.jpg?dateUpdated=1632326213847",
                    "attending": 33,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T19:00:00.000",
                    "endTime": "2021-10-16T01:30:00.000",
                    "contentUrl": "/events/1460700",
                    "venue": {
                        "id": "147611",
                        "name": "The Glove That Fits",
                        "contentUrl": "/clubs/147611",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "11883",
                            "name": "DJ Soch",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df0"
                            }
                        },
                        {
                            "id": "56739",
                            "name": "JVXTA",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df1"
                            }
                        },
                        {
                            "id": "80856",
                            "name": "Zapata",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df2"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467775",
                    "title": "CLUB YEKE Viii",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467775-front.jpg?dateUpdated=1632827477390",
                    "attending": 26,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1467775",
                    "venue": {
                        "id": "175287",
                        "name": "Peckham Audio",
                        "contentUrl": "/clubs/175287",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14548",
                        "blurb": "A wildly diverse blend of sounds comes to Peckham. Saint Lucian star Blackboy and Nyege Nyege's De Schuurmann lead proceedings, with grime don Riko Dan hosting and toasting for Livity Sound's Kouslin alongside the lively soca of Credible."
                    },
                    "artists": [
                        {
                            "id": "40578",
                            "name": "Blackboy",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df3"
                            }
                        },
                        {
                            "id": "54985",
                            "name": "Riko Dan",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df4"
                            }
                        },
                        {
                            "id": "65432",
                            "name": "Tash LC",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df5"
                            }
                        },
                        {
                            "id": "82156",
                            "name": "Kouslin",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df6"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1454007",
                    "title": "Hot Steppa",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1454007-1787019-front.jpg?dateUpdated=1630582115040",
                    "attending": 14,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:00:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1454007",
                    "venue": {
                        "id": "62885",
                        "name": "Rolling Stock",
                        "contentUrl": "/clubs/62885",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "88536",
                            "name": "D1:E1",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df7"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464982",
                    "title": "Number 90 Presents: Fade To Zaire",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1464982-1799973-front.jpg?dateUpdated=1632502257667",
                    "attending": 13,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T20:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1464982",
                    "venue": {
                        "id": "72207",
                        "name": "Number 90 Bar",
                        "contentUrl": "/clubs/72207",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "70623",
                            "name": "Fade to Zaire",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df8"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467899",
                    "title": "Dreamnights",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467899-1801858-front.jpg?dateUpdated=1632836653103",
                    "attending": 12,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1467899",
                    "venue": {
                        "id": "77082",
                        "name": "Looking Glass Cocktail Club",
                        "contentUrl": "/clubs/77082",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "87715",
                            "name": "J.tham",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21df9"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471272",
                    "title": "Future presents Cristoph",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1471272-front.jpg?dateUpdated=1633949671017",
                    "attending": 10,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1471272",
                    "venue": {
                        "id": "725",
                        "name": "Ministry Of Sound",
                        "contentUrl": "/clubs/725",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "13793",
                            "name": "Olivier Giacomotto",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dfa"
                            }
                        },
                        {
                            "id": "32510",
                            "name": "Jonas Rathsman",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dfb"
                            }
                        },
                        {
                            "id": "40503",
                            "name": "Eli & Fur",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dfc"
                            }
                        },
                        {
                            "id": "41204",
                            "name": "Keith Hunter",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dfd"
                            }
                        },
                        {
                            "id": "43527",
                            "name": "Cristoph",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dfe"
                            }
                        },
                        {
                            "id": "84367",
                            "name": "MKEY",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21dff"
                            }
                        },
                        {
                            "id": "86627",
                            "name": "NenaHalena",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e00"
                            }
                        },
                        {
                            "id": "87409",
                            "name": "Josh Ramadan",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e01"
                            }
                        },
                        {
                            "id": "96448",
                            "name": "Burdi",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e02"
                            }
                        },
                        {
                            "id": "97809",
                            "name": "Dina Celina",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e03"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464826",
                    "title": "Sc&p: Lokier + Autumns (Live) + Tia Cousins + Harry James",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1464826-front.jpg?dateUpdated=1631701161310",
                    "attending": 9,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T03:30:00.000",
                    "contentUrl": "/events/1464826",
                    "venue": {
                        "id": "61205",
                        "name": "The Waiting Room",
                        "contentUrl": "/clubs/61205",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "12433",
                            "name": "Harry James",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e04"
                            }
                        },
                        {
                            "id": "52520",
                            "name": "Lokier",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e05"
                            }
                        },
                        {
                            "id": "74236",
                            "name": "Autumns",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e06"
                            }
                        },
                        {
                            "id": "93491",
                            "name": "Tia Cousins",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e07"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468366",
                    "title": "Groovment X Escapada - The First Collaboration",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1468366-front.jpg?dateUpdated=1632930547973",
                    "attending": 8,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:00:00.000",
                    "endTime": "2021-10-16T06:00:00.000",
                    "contentUrl": "/events/1468366",
                    "venue": {
                        "id": "189601",
                        "name": "Village512",
                        "contentUrl": "/clubs/189601",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "70997",
                            "name": "Danny Owen",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e08"
                            }
                        },
                        {
                            "id": "94145",
                            "name": "QUISTA",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e09"
                            }
                        },
                        {
                            "id": "97270",
                            "name": "VERITAS (UK)",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e0a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462397",
                    "title": "Sin City Presents Marcelina Wick, Clive Henry, CAMZ and CISCO",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1462397-front.jpg?dateUpdated=1630921066713",
                    "attending": 7,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T19:00:00.000",
                    "endTime": "2021-10-16T02:30:00.000",
                    "contentUrl": "/events/1462397",
                    "venue": {
                        "id": "182797",
                        "name": "Q Shoreditch",
                        "contentUrl": "/clubs/182797",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "842",
                            "name": "Clive Henry",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e0b"
                            }
                        },
                        {
                            "id": "84714",
                            "name": "Marcelina Wick",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e0c"
                            }
                        },
                        {
                            "id": "101273",
                            "name": "CAMZ",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e0d"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465698",
                    "title": "Singularity UK present: On A Tech-Flex",
                    "flyerFront": null,
                    "attending": 6,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T05:00:00.000",
                    "contentUrl": "/events/1465698",
                    "venue": {
                        "id": "937",
                        "name": "Electrowerkz",
                        "contentUrl": "/clubs/937",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466944",
                    "title": "Afrotronics",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1466944-front.jpg?dateUpdated=1632474778437",
                    "attending": 5,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:00:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1466944",
                    "venue": {
                        "id": "164341",
                        "name": "The Jago",
                        "contentUrl": "/clubs/164341",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469591",
                    "title": "Wrong! Techno Afterhours",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1469591-front.jpg?dateUpdated=1633419516213",
                    "attending": 4,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:59:00.000",
                    "endTime": "2021-10-16T10:00:00.000",
                    "contentUrl": "/events/1469591",
                    "venue": {
                        "id": "170808",
                        "name": "Union Club, Vauxhall",
                        "contentUrl": "/clubs/170808",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "65149",
                            "name": "Carlos Martinez",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e0e"
                            }
                        },
                        {
                            "id": "74222",
                            "name": "Jamie de Rooy",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e0f"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471415",
                    "title": "Bass Camp X About TV presents: Tsuki, Shapes & More",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1471415-front.jpg?dateUpdated=1634034641727",
                    "attending": 4,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1471415",
                    "venue": {
                        "id": "65362",
                        "name": "The Prince of Wales",
                        "contentUrl": "/clubs/65362",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "34959",
                            "name": "Event Horizon",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e10"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1463984",
                    "title": "Funky Friday - London's Biggest Hip-Hop & Trap Party",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1463984-front.jpg?dateUpdated=1632689990007",
                    "attending": 2,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:00:00.000",
                    "endTime": "2021-10-16T02:00:00.000",
                    "contentUrl": "/events/1463984",
                    "venue": {
                        "id": "187978",
                        "name": "The Joiner on Worship",
                        "contentUrl": "/clubs/187978",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1463380",
                    "title": "Turn Up Shoreditch",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1463380-front.jpg?dateUpdated=1631179249813",
                    "attending": 1,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:00:00.000",
                    "endTime": "2021-10-16T02:00:00.000",
                    "contentUrl": "/events/1463380",
                    "venue": {
                        "id": "187978",
                        "name": "The Joiner on Worship",
                        "contentUrl": "/clubs/187978",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465361",
                    "title": "Afronaut Solaris - Winter Opener",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1465361-front.jpg?dateUpdated=1631824749007",
                    "attending": 1,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:00:00.000",
                    "endTime": "2021-10-16T02:00:00.000",
                    "contentUrl": "/events/1465361",
                    "venue": {
                        "id": "3686",
                        "name": "Catch",
                        "contentUrl": "/clubs/3686",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "100978",
                            "name": "Marcus Bajjio",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e11"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466891",
                    "title": "Parade",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1466891-front.jpg?dateUpdated=1632413197927",
                    "attending": 1,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T18:00:00.000",
                    "endTime": "2021-10-16T01:30:00.000",
                    "contentUrl": "/events/1466891",
                    "venue": {
                        "id": "734",
                        "name": "93 Feet East",
                        "contentUrl": "/clubs/734",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "76363",
                            "name": "George Goodson",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e12"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462773",
                    "title": "Decorum",
                    "flyerFront": null,
                    "attending": 0,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:30:00.000",
                    "endTime": "2021-10-16T03:30:00.000",
                    "contentUrl": "/events/1462773",
                    "venue": {
                        "id": "70277",
                        "name": "Proud Cabaret",
                        "contentUrl": "/clubs/70277",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468285",
                    "title": "Club Paradiso - Every Friday",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1468285-front.jpg?dateUpdated=1632917937900",
                    "attending": 0,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T20:30:00.000",
                    "endTime": "2021-10-16T01:30:00.000",
                    "contentUrl": "/events/1468285",
                    "venue": {
                        "id": "8136",
                        "name": "Paradise",
                        "contentUrl": "/clubs/8136",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1472354",
                    "title": "The Wire x Grounded presents Friday Boat Party",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1472354-0-front.jpg?dateUpdated=1634201275747",
                    "attending": 0,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T23:00:00.000",
                    "endTime": "2021-10-16T10:00:00.000",
                    "contentUrl": "/events/1472354",
                    "venue": {
                        "id": "188875",
                        "name": "Boat in Hackney - Location Announced on our Group Chat",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "87573",
                            "name": "Tony Loi",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e13"
                            }
                        },
                        {
                            "id": "103338",
                            "name": "RIN0",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e14"
                            }
                        },
                        {
                            "id": "103489",
                            "name": "Khada",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e15"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467490",
                    "title": "Night Shift Rave at XOYO // Friday 15th Oct // Open till 4am",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467490-front.jpg?dateUpdated=1632838338373",
                    "attending": 120,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T04:00:00.000",
                    "contentUrl": "/events/1467490",
                    "venue": {
                        "id": "33592",
                        "name": "XOYO",
                        "contentUrl": "/clubs/33592",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1457648",
                    "title": "Haçienda Classical",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1457648-front.jpg?dateUpdated=1628679564500",
                    "attending": 23,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T19:00:00.000",
                    "endTime": "2021-10-16T02:00:00.000",
                    "contentUrl": "/events/1457648",
                    "venue": {
                        "id": "127337",
                        "name": "Printworks",
                        "contentUrl": "/clubs/127337",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "72",
                            "name": "David Morales",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e16"
                            }
                        },
                        {
                            "id": "2102",
                            "name": "DJ Paulette",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e17"
                            }
                        },
                        {
                            "id": "10934",
                            "name": "Graeme Park",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e18"
                            }
                        },
                        {
                            "id": "50327",
                            "name": "Mike Pickering",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e19"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466744",
                    "title": "Well Street Records In-Store",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1466744-front.jpg?dateUpdated=1632389263500",
                    "attending": 5,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T18:00:00.000",
                    "endTime": "2021-10-16T02:00:00.000",
                    "contentUrl": "/events/1466744",
                    "venue": {
                        "id": "175486",
                        "name": "Kristina Records",
                        "contentUrl": "/clubs/175486",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "90132",
                            "name": "Ehua",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e1a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465550",
                    "title": "The Lot Fridays: Michelle Manetti (Fèmmme Fraîche) - Free Entry",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/9/uk-0915-1465550-front.jpg?dateUpdated=1632240991240",
                    "attending": 2,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T17:00:00.000",
                    "endTime": "2021-10-15T22:00:00.000",
                    "contentUrl": "/events/1465550",
                    "venue": {
                        "id": "187392",
                        "name": "HWK: The Lot",
                        "contentUrl": "/clubs/187392",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "39175",
                            "name": "Michelle Manetti",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e1b"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1441208",
                    "title": "KT Tunstall",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1441208-front.jpg?dateUpdated=1618186897867",
                    "attending": 1,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:30:00.000",
                    "endTime": "2021-10-15T23:00:00.000",
                    "contentUrl": "/events/1441208",
                    "venue": {
                        "id": "154637",
                        "name": "Boisdale of Canary Wharf",
                        "contentUrl": "/clubs/154637",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467069",
                    "title": "Afrikan Boy",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467069-front.jpg?dateUpdated=1632494096730",
                    "attending": 1,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T19:30:00.000",
                    "endTime": "2021-10-15T22:00:00.000",
                    "contentUrl": "/events/1467069",
                    "venue": {
                        "id": "190131",
                        "name": "Woolwich Works",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468045",
                    "title": "World at Hovarda",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1468045-1809747-front.jpg?dateUpdated=1633935576997",
                    "attending": 1,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T22:00:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1468045",
                    "venue": {
                        "id": "168258",
                        "name": "Hovarda London",
                        "contentUrl": "/clubs/168258",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "99926",
                            "name": "MÅNGATA",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e1c"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1444430",
                    "title": "West End Pub Crawl // 5 Venues // Free Shots // Discounted Drinks More",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1444430-front.jpg?dateUpdated=1621502398337",
                    "attending": 0,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T19:30:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1444430",
                    "venue": {
                        "id": "10856",
                        "name": "Ruby Blue",
                        "contentUrl": "/clubs/10856",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467994",
                    "title": "Neil Thornton & Jay Bacall",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1467994-front.jpg?dateUpdated=1632846145953",
                    "attending": 0,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T19:30:00.000",
                    "endTime": "2021-10-15T23:30:00.000",
                    "contentUrl": "/events/1467994",
                    "venue": {
                        "id": "162159",
                        "name": "Dartmouth Arms",
                        "contentUrl": "/clubs/162159",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "61561",
                            "name": "Neil Thornton",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e1d"
                            }
                        },
                        {
                            "id": "62217",
                            "name": "Jay Bacall",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e1e"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468203",
                    "title": "Club Integral at IKLECTIK",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1468203-front.jpg?dateUpdated=1632909184527",
                    "attending": 0,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T19:30:00.000",
                    "endTime": "2021-10-15T22:00:00.000",
                    "contentUrl": "/events/1468203",
                    "venue": {
                        "id": "102432",
                        "name": "Iklectik",
                        "contentUrl": "/clubs/102432",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469898",
                    "title": "The Fontanas 'Luxury Of Time Remix EP' Launch Session - Live In The Lounge",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1469898-front.jpg?dateUpdated=1633461183260",
                    "attending": 0,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T20:00:00.000",
                    "endTime": "2021-10-16T01:00:00.000",
                    "contentUrl": "/events/1469898",
                    "venue": {
                        "id": "172847",
                        "name": "CLF Art Lounge & Roof Garden",
                        "contentUrl": "/clubs/172847",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462278",
                    "title": "[CANCELLED] krankbrother presents: DJ Koze & Special Guest",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1015-1462278-front.jpg?dateUpdated=1632928000937",
                    "attending": 143,
                    "date": "2021-10-15T00:00:00.000",
                    "startTime": "2021-10-15T21:00:00.000",
                    "endTime": "2021-10-16T03:00:00.000",
                    "contentUrl": "/events/1462278",
                    "venue": {
                        "id": "7487",
                        "name": "The Roundhouse",
                        "contentUrl": "/clubs/7487",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "683",
                            "name": "DJ Koze",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e1f"
                            }
                        },
                        {
                            "id": "18242",
                            "name": "Krankbrother",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e20"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465077",
                    "title": "Audiowhore 10th Birthday Finale w Amine Edge & Dance",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1465077-front.jpg?dateUpdated=1634077221677",
                    "attending": 390,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1465077",
                    "venue": {
                        "id": "141756",
                        "name": "E1",
                        "contentUrl": "/clubs/141756",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "28179",
                            "name": "Will Taylor",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e21"
                            }
                        },
                        {
                            "id": "36437",
                            "name": "Amine Edge & DANCE",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e22"
                            }
                        },
                        {
                            "id": "41000",
                            "name": "Carnao Beats",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e23"
                            }
                        },
                        {
                            "id": "41530",
                            "name": "Steven Cee",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e24"
                            }
                        },
                        {
                            "id": "41535",
                            "name": "DJ Majesty",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e25"
                            }
                        },
                        {
                            "id": "48512",
                            "name": "AR (UK)",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e26"
                            }
                        },
                        {
                            "id": "63812",
                            "name": "Sammy Porter",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e27"
                            }
                        },
                        {
                            "id": "70696",
                            "name": "George Mensah",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e28"
                            }
                        },
                        {
                            "id": "97301",
                            "name": "Sam Beach",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e29"
                            }
                        },
                        {
                            "id": "101285",
                            "name": "JAYDAA",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e2a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1455316",
                    "title": "Soul City: Disco, House & Soul Every Saturday",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1455316-front.jpg?dateUpdated=1634124882790",
                    "attending": 286,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:30:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1455316",
                    "venue": {
                        "id": "1502",
                        "name": "The Jazz Cafe",
                        "contentUrl": "/clubs/1502",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "3988",
                            "name": "Marcia Carr",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e2b"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1457684",
                    "title": "Freedom: Feel Good House & Disco with Ben Pearce",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1457684-1800928-front.jpg?dateUpdated=1634120490633",
                    "attending": 270,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1457684",
                    "venue": {
                        "id": "1557",
                        "name": "Brixton Jamm",
                        "contentUrl": "/clubs/1557",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "15175",
                            "name": "Ben Pearce",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e2c"
                            }
                        },
                        {
                            "id": "89310",
                            "name": "Cover3",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e2d"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1453830",
                    "title": "Fisher",
                    "flyerFront": null,
                    "attending": 257,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T12:00:00.000",
                    "endTime": "2021-10-16T23:00:00.000",
                    "contentUrl": "/events/1453830",
                    "venue": {
                        "id": "127337",
                        "name": "Printworks",
                        "contentUrl": "/clubs/127337",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "1010",
                            "name": "Dubfire",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e2e"
                            }
                        },
                        {
                            "id": "33475",
                            "name": "Marco Lys",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e2f"
                            }
                        },
                        {
                            "id": "61254",
                            "name": "Solardo",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e30"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1456688",
                    "title": "A Disco in a Str!p Club",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1456688-front.jpg?dateUpdated=1634110549890",
                    "attending": 237,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1456688",
                    "venue": {
                        "id": "20525",
                        "name": "Metropolis",
                        "contentUrl": "/clubs/20525",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "67205",
                            "name": "Ron Basejam",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e31"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1460360",
                    "title": "krankbrother presents: Margaret Dygas",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1460360-front.jpg?dateUpdated=1633961724247",
                    "attending": 197,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1460360",
                    "venue": {
                        "id": "155399",
                        "name": "FOLD",
                        "contentUrl": "/clubs/155399",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "705",
                            "name": "Margaret Dygas",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e32"
                            }
                        },
                        {
                            "id": "18242",
                            "name": "Krankbrother",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e33"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1461408",
                    "title": "Optimo (All Night Long)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1461408-1811651-front.jpg?dateUpdated=1634131600620",
                    "attending": 167,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T21:30:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1461408",
                    "venue": {
                        "id": "106730",
                        "name": "Phonox",
                        "contentUrl": "/clubs/106730",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464511",
                    "title": "Egg LDN Pres: Victor Ruiz, Alex Stein, Kyle E & This Guy",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1464511-1810449-front.jpg?dateUpdated=1633968840247",
                    "attending": 142,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T07:00:00.000",
                    "contentUrl": "/events/1464511",
                    "venue": {
                        "id": "874",
                        "name": "Egg London",
                        "contentUrl": "/clubs/874",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "13770",
                            "name": "Victor Ruiz",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e34"
                            }
                        },
                        {
                            "id": "73645",
                            "name": "Alex Stein",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e35"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1458170",
                    "title": "Night Tales: Ryan Elliott b2b Jasper James, Holly Lester & Amaliah",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1458170-1787194-front.jpg?dateUpdated=1631116783853",
                    "attending": 130,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T17:00:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1458170",
                    "venue": {
                        "id": "155586",
                        "name": "Night Tales",
                        "contentUrl": "/clubs/155586",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "736",
                            "name": "Ryan Elliott",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e36"
                            }
                        },
                        {
                            "id": "44593",
                            "name": "Holly Lester",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e37"
                            }
                        },
                        {
                            "id": "48618",
                            "name": "Jasper James",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e38"
                            }
                        },
                        {
                            "id": "68457",
                            "name": "Armând",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e39"
                            }
                        },
                        {
                            "id": "101213",
                            "name": "Amaliah",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e3a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1455034",
                    "title": "frames w/ Subb-An, Voigtmann, Truly Madly, Alec Falconer & More",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1455034-front.jpg?dateUpdated=1627496090050",
                    "attending": 128,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T07:00:00.000",
                    "contentUrl": "/events/1455034",
                    "venue": {
                        "id": "13311",
                        "name": "Lightbox",
                        "contentUrl": "/clubs/13311",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "pick": {
                        "id": "14476",
                        "blurb": "Some of the liveliest names in minimal house and UKG head down to Vauxhall's Lightbox, with bassy sounds in the intimate Light Out second room."
                    },
                    "artists": [
                        {
                            "id": "3434",
                            "name": "Subb-an",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e3b"
                            }
                        },
                        {
                            "id": "11440",
                            "name": "Voigtmann",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e3c"
                            }
                        },
                        {
                            "id": "59057",
                            "name": "Alec Falconer",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e3d"
                            }
                        },
                        {
                            "id": "79757",
                            "name": "Truly Madly",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e3e"
                            }
                        },
                        {
                            "id": "102002",
                            "name": "Bluetoof",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e3f"
                            }
                        },
                        {
                            "id": "102005",
                            "name": "Ila Brugal",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e40"
                            }
                        },
                        {
                            "id": "102359",
                            "name": "Dr Dubplate",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e41"
                            }
                        },
                        {
                            "id": "103364",
                            "name": "Fearless Dread",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e42"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1440004",
                    "title": "One2",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/7/uk-0703-1440004-1731975-front.jpg?dateUpdated=1625154003827",
                    "attending": 127,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T21:00:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1440004",
                    "venue": {
                        "id": "62885",
                        "name": "Rolling Stock",
                        "contentUrl": "/clubs/62885",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "69288",
                            "name": "Matt Jones",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e43"
                            }
                        },
                        {
                            "id": "100031",
                            "name": "zbart",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e44"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1440929",
                    "title": "Guts (DJ Set) + David Walters (Live)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1440929-1795372-front.jpg?dateUpdated=1632394171167",
                    "attending": 126,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T19:00:00.000",
                    "endTime": "2021-10-16T22:30:00.000",
                    "contentUrl": "/events/1440929",
                    "venue": {
                        "id": "1502",
                        "name": "The Jazz Cafe",
                        "contentUrl": "/clubs/1502",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1456609",
                    "title": "Mind of Ours: Bethnal Green",
                    "flyerFront": null,
                    "attending": 109,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T19:00:00.000",
                    "endTime": "2021-10-17T01:30:00.000",
                    "contentUrl": "/events/1456609",
                    "venue": {
                        "id": "177013",
                        "name": "Space 289",
                        "contentUrl": "/clubs/177013",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "92985",
                            "name": "Luke Sandler",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e45"
                            }
                        },
                        {
                            "id": "100177",
                            "name": "William Lake",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e46"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467088",
                    "title": "Pleasurehood - House & Disco Saturdays at XOYO - £5 Tickets",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1467088-1801106-front.jpg?dateUpdated=1632818327767",
                    "attending": 95,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1467088",
                    "venue": {
                        "id": "33592",
                        "name": "XOYO",
                        "contentUrl": "/clubs/33592",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464780",
                    "title": "Patterned LDN - Day & Night",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1464780-front.jpg?dateUpdated=1631699163400",
                    "attending": 83,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T14:00:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1464780",
                    "venue": {
                        "id": "9180",
                        "name": "Sugar Hut",
                        "contentUrl": "/clubs/9180",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "82535",
                            "name": "Nxtakins",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e47"
                            }
                        },
                        {
                            "id": "100264",
                            "name": "Slikas",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e48"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1451006",
                    "title": "Concrete Music Shoreditch Rooftop Party 002",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1451006-1809568-front.jpg?dateUpdated=1634027955507",
                    "attending": 77,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T14:00:00.000",
                    "endTime": "2021-10-16T21:00:00.000",
                    "contentUrl": "/events/1451006",
                    "venue": {
                        "id": "30015",
                        "name": "Basing House",
                        "contentUrl": "/clubs/30015",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1461732",
                    "title": "Genix: 199x Tour - London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1461732-1799914-front.jpg?dateUpdated=1632496188303",
                    "attending": 76,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1461732",
                    "venue": {
                        "id": "176870",
                        "name": "Orange Yard",
                        "contentUrl": "/clubs/176870",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "55307",
                            "name": "Amy Wiles",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e49"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464985",
                    "title": "Number 90 Presents: Georgie Rogers, Phonica Records",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1464985-1799974-front.jpg?dateUpdated=1633964033657",
                    "attending": 72,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T17:00:00.000",
                    "endTime": "2021-10-17T01:00:00.000",
                    "contentUrl": "/events/1464985",
                    "venue": {
                        "id": "72207",
                        "name": "Number 90 Bar",
                        "contentUrl": "/clubs/72207",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1445822",
                    "title": "Don't -vs- I Love Acid",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1445822-1786226-front.jpg?dateUpdated=1634060833787",
                    "attending": 68,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1445822",
                    "venue": {
                        "id": "2587",
                        "name": "Corsica Studios",
                        "contentUrl": "/clubs/2587",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "2210",
                            "name": "Jon Dasilva",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e4a"
                            }
                        },
                        {
                            "id": "8727",
                            "name": "Neville Watson",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e4b"
                            }
                        },
                        {
                            "id": "16164",
                            "name": "Posthuman",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e4c"
                            }
                        },
                        {
                            "id": "24377",
                            "name": "Nightwave",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e4d"
                            }
                        },
                        {
                            "id": "33147",
                            "name": "Jerome Hill",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e4e"
                            }
                        },
                        {
                            "id": "41722",
                            "name": "Warlock",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e4f"
                            }
                        },
                        {
                            "id": "46077",
                            "name": "P-Hocto",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e50"
                            }
                        },
                        {
                            "id": "47275",
                            "name": "JoeFarr",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e51"
                            }
                        },
                        {
                            "id": "57370",
                            "name": "Josh Caffe",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e52"
                            }
                        },
                        {
                            "id": "81024",
                            "name": "Faux Naif",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e53"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465491",
                    "title": "Superfreq",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1465491-1804770-front.jpg?dateUpdated=1633121819757",
                    "attending": 66,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T08:00:00.000",
                    "contentUrl": "/events/1465491",
                    "venue": {
                        "id": "190099",
                        "name": "Superfreq",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "339",
                            "name": "Mr C",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e54"
                            }
                        },
                        {
                            "id": "3551",
                            "name": "Tred Benedict",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e55"
                            }
                        },
                        {
                            "id": "56110",
                            "name": "Broken Neon",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e56"
                            }
                        },
                        {
                            "id": "102937",
                            "name": "Jake Beautyman",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e57"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1443821",
                    "title": "Planet V – London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1443821-1774175-front.jpg?dateUpdated=1628512295997",
                    "attending": 65,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1443821",
                    "venue": {
                        "id": "100941",
                        "name": "The Steel Yard",
                        "contentUrl": "/clubs/100941",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "350",
                            "name": "DJ Marky",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e58"
                            }
                        },
                        {
                            "id": "61628",
                            "name": "IC3",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e59"
                            }
                        },
                        {
                            "id": "82004",
                            "name": "Sofi",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e5a"
                            }
                        },
                        {
                            "id": "82734",
                            "name": "Bryan Gee",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e5b"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1439812",
                    "title": "Loraine James",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1439812-front.jpg?dateUpdated=1633634664627",
                    "attending": 64,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T19:30:00.000",
                    "endTime": "2021-10-16T23:00:00.000",
                    "contentUrl": "/events/1439812",
                    "venue": {
                        "id": "152006",
                        "name": "Studio 9294",
                        "contentUrl": "/clubs/152006",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "77135",
                            "name": "Loraine James",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e5c"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1458456",
                    "title": "in the Loft x Nick Höppner [All Night Long]",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1458456-1790820-front.jpg?dateUpdated=1631624761880",
                    "attending": 57,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T16:00:00.000",
                    "endTime": "2021-10-17T02:30:00.000",
                    "contentUrl": "/events/1458456",
                    "venue": {
                        "id": "115524",
                        "name": "NT's Loft",
                        "contentUrl": "/clubs/115524",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "2033",
                            "name": "Nick Höppner",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e5d"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464848",
                    "title": "Aura Takeover: Starlane Pizza Bar",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1464848-1796100-front.jpg?dateUpdated=1632041110350",
                    "attending": 49,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T14:00:00.000",
                    "endTime": "2021-10-16T22:00:00.000",
                    "contentUrl": "/events/1464848",
                    "venue": {
                        "id": "151483",
                        "name": "Starlane Pizza Bar",
                        "contentUrl": "/clubs/151483",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "43717",
                            "name": "DJ Caspa",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e5e"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1456908",
                    "title": "[CANCELLED] Asone - The Warehouse",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1456908-1778485-front.jpg?dateUpdated=1633180013927",
                    "attending": 46,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T21:00:00.000",
                    "endTime": "2021-10-17T05:00:00.000",
                    "contentUrl": "/events/1456908",
                    "venue": {
                        "id": "189107",
                        "name": "Unit 58",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "99352",
                            "name": "Bepe",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e5f"
                            }
                        },
                        {
                            "id": "99916",
                            "name": "Charlie Harvey",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e60"
                            }
                        },
                        {
                            "id": "101252",
                            "name": "Fred Symonds",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e61"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468190",
                    "title": "E3ST",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1468190-1811604-front.jpg?dateUpdated=1634064985840",
                    "attending": 44,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:30:00.000",
                    "endTime": "2021-10-17T05:30:00.000",
                    "contentUrl": "/events/1468190",
                    "venue": {
                        "id": "123824",
                        "name": "Bow Bridge",
                        "contentUrl": "/clubs/123824",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "41744",
                            "name": "Riaz Dhanani",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e62"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469222",
                    "title": "Pearl Protector Party",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1469222-1806625-front.jpg?dateUpdated=1633460473470",
                    "attending": 44,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T18:00:00.000",
                    "endTime": "2021-10-16T23:59:00.000",
                    "contentUrl": "/events/1469222",
                    "venue": {
                        "id": "188711",
                        "name": "Avalon Cafe Bermondsey",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "83520",
                            "name": "Inner Totality",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e63"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467790",
                    "title": "The Residents Day",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1467790-1803988-front.jpg?dateUpdated=1633031417860",
                    "attending": 43,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T14:00:00.000",
                    "endTime": "2021-10-16T21:00:00.000",
                    "contentUrl": "/events/1467790",
                    "venue": {
                        "id": "55913",
                        "name": "Floripa",
                        "contentUrl": "/clubs/55913",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "69674",
                            "name": "Tahir",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e64"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469596",
                    "title": "Goon Club Allstars & Ormside present DJ Lag",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1469596-1810378-front.jpg?dateUpdated=1633960647187",
                    "attending": 43,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T05:00:00.000",
                    "contentUrl": "/events/1469596",
                    "venue": {
                        "id": "108196",
                        "name": "Ormside Projects",
                        "contentUrl": "/clubs/108196",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "67564",
                            "name": "DJ LAG",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e65"
                            }
                        },
                        {
                            "id": "99324",
                            "name": "Joe Cotch",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e66"
                            }
                        },
                        {
                            "id": "103063",
                            "name": "Charisse C",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e67"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465056",
                    "title": "Dirty Housing",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1465056-1800354-front.jpg?dateUpdated=1632593046053",
                    "attending": 27,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1465056",
                    "venue": {
                        "id": "30015",
                        "name": "Basing House",
                        "contentUrl": "/clubs/30015",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "77024",
                            "name": "James View",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e68"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1463488",
                    "title": "Mnml London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1463488-1797761-front.jpg?dateUpdated=1634229484887",
                    "attending": 23,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T08:00:00.000",
                    "contentUrl": "/events/1463488",
                    "venue": {
                        "id": "186846",
                        "name": "Secret Location East London",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465445",
                    "title": "Awoken",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1465445-1795851-front.jpg?dateUpdated=1631893996213",
                    "attending": 22,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1465445",
                    "venue": {
                        "id": "175287",
                        "name": "Peckham Audio",
                        "contentUrl": "/clubs/175287",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462851",
                    "title": "Apocalyptika",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1462851-0-front.jpg?dateUpdated=1631056789213",
                    "attending": 19,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T16:00:00.000",
                    "endTime": "2021-10-16T23:00:00.000",
                    "contentUrl": "/events/1462851",
                    "venue": {
                        "id": "189812",
                        "name": "Coachhouse",
                        "contentUrl": "/clubs/189812",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1470896",
                    "title": "乃₳бɄ丂нк₳",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1470896-front.jpg?dateUpdated=1633713933717",
                    "attending": 11,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T18:00:00.000",
                    "endTime": "2021-10-17T02:00:00.000",
                    "contentUrl": "/events/1470896",
                    "venue": {
                        "id": "122921",
                        "name": "Lion and Lamb",
                        "contentUrl": "/clubs/122921",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471173",
                    "title": "The Afters",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1471173-1810481-front.jpg?dateUpdated=1633971608593",
                    "attending": 11,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T21:30:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1471173",
                    "venue": {
                        "id": "132928",
                        "name": "The Lighthouse",
                        "contentUrl": "/clubs/132928",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "69674",
                            "name": "Tahir",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e69"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469959",
                    "title": "Carnival Sound Rooftop & Club Party",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1469959-front.jpg?dateUpdated=1633532912007",
                    "attending": 5,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1469959",
                    "venue": {
                        "id": "65362",
                        "name": "The Prince of Wales",
                        "contentUrl": "/clubs/65362",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1449198",
                    "title": "DNB Bingo",
                    "flyerFront": null,
                    "attending": 4,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T18:00:00.000",
                    "endTime": "2021-10-16T22:30:00.000",
                    "contentUrl": "/events/1449198",
                    "venue": {
                        "id": "60356",
                        "name": "Oval Space",
                        "contentUrl": "/clubs/60356",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466261",
                    "title": "Afrobash (Bashment Afrobeats RnB Hiphop)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1466261-front.jpg?dateUpdated=1632247576030",
                    "attending": 3,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:30:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1466261",
                    "venue": {
                        "id": "124422",
                        "name": "Omeara",
                        "contentUrl": "/clubs/124422",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "68037",
                            "name": "Larizzle",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e6a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462585",
                    "title": "Remote on a Boat",
                    "flyerFront": null,
                    "attending": 2,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1462585",
                    "venue": {
                        "id": "188694",
                        "name": "Secret Location East London",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "101150",
                            "name": "Alfie Mallett",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e6b"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1453776",
                    "title": "Rock The Boat - Old Skool RnB Shoreditch Brunch",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1009-1453776-front.jpg?dateUpdated=1630944628060",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T13:00:00.000",
                    "endTime": "2021-10-16T17:00:00.000",
                    "contentUrl": "/events/1453776",
                    "venue": {
                        "id": "185213",
                        "name": "Red Dog Saloon",
                        "contentUrl": "/clubs/185213",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1453777",
                    "title": "NO Scrubs - RnB and Hip-Hop Shoreditch Brunch Party",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1453777-front.jpg?dateUpdated=1626865053533",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T13:00:00.000",
                    "endTime": "2021-10-16T17:00:00.000",
                    "contentUrl": "/events/1453777",
                    "venue": {
                        "id": "185213",
                        "name": "Red Dog Saloon",
                        "contentUrl": "/clubs/185213",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1461000",
                    "title": "Robbo Ranx's Bassline Brunch",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1461000-front.jpg?dateUpdated=1632338064023",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T13:00:00.000",
                    "endTime": "2021-10-16T17:00:00.000",
                    "contentUrl": "/events/1461000",
                    "venue": {
                        "id": "185400",
                        "name": "The Blues Kitchen",
                        "contentUrl": "/clubs/185400",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1461995",
                    "title": "HIP-HOP x Dancehall x Afrobeats IN The City",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1461995-front.jpg?dateUpdated=1632690004640",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T21:00:00.000",
                    "endTime": "2021-10-17T02:00:00.000",
                    "contentUrl": "/events/1461995",
                    "venue": {
                        "id": "122169",
                        "name": "Ma Dame",
                        "contentUrl": "/clubs/122169",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464078",
                    "title": "OOX",
                    "flyerFront": null,
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T21:00:00.000",
                    "endTime": "2021-10-17T02:00:00.000",
                    "contentUrl": "/events/1464078",
                    "venue": {
                        "id": "46126",
                        "name": "Servant Jazz Quarters",
                        "contentUrl": "/clubs/46126",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "84302",
                            "name": "Charles Vaughan",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e6c"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468296",
                    "title": "Love Asylum with Kristy Harper",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1468296-1811554-front.jpg?dateUpdated=1634058917437",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T20:30:00.000",
                    "endTime": "2021-10-17T01:30:00.000",
                    "contentUrl": "/events/1468296",
                    "venue": {
                        "id": "8136",
                        "name": "Paradise",
                        "contentUrl": "/clubs/8136",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "66387",
                            "name": "Kristy Harper",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e6d"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1472091",
                    "title": "Soca Till YUH Drop - All Day Fete",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1472091-front.jpg?dateUpdated=1634121916183",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T17:00:00.000",
                    "endTime": "2021-10-17T23:00:00.000",
                    "contentUrl": "/events/1472091",
                    "venue": {
                        "id": "148994",
                        "name": "Pitch Stratford",
                        "contentUrl": "/clubs/148994",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "79201",
                            "name": "DJ Vibes",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e6e"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471334",
                    "title": "Underbridge // Techno",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1471334-1811731-front.jpg?dateUpdated=1634107802407",
                    "attending": 6,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T06:30:00.000",
                    "contentUrl": "/events/1471334",
                    "venue": {
                        "id": "185553",
                        "name": "Secret Location",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "91085",
                            "name": "Zeller",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e6f"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465173",
                    "title": "Jigsawmusic with EVM128 & Deep Space Orchestra",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1465173-1795149-front.jpg?dateUpdated=1631802182573",
                    "attending": 5,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T14:00:00.000",
                    "endTime": "2021-10-16T22:00:00.000",
                    "contentUrl": "/events/1465173",
                    "venue": {
                        "id": "187392",
                        "name": "HWK: The Lot",
                        "contentUrl": "/clubs/187392",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "18873",
                            "name": "Deep Space Orchestra",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e70"
                            }
                        },
                        {
                            "id": "55527",
                            "name": "EVM128",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e71"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1445901",
                    "title": "HYDE.",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1445901-front.jpg?dateUpdated=1629885472943",
                    "attending": 3,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T23:00:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1445901",
                    "venue": {
                        "id": "180247",
                        "name": "Hoxton Underbelly",
                        "contentUrl": "/clubs/180247",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466541",
                    "title": "Floating Spectrum",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1466541-front.jpg?dateUpdated=1632330679847",
                    "attending": 3,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T20:30:00.000",
                    "endTime": "2021-10-16T22:30:00.000",
                    "contentUrl": "/events/1466541",
                    "venue": {
                        "id": "102432",
                        "name": "Iklectik",
                        "contentUrl": "/clubs/102432",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468920",
                    "title": "Abyss X: Life Appeal",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1468920-front.jpg?dateUpdated=1633089528783",
                    "attending": 2,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T20:00:00.000",
                    "endTime": "2021-10-16T22:00:00.000",
                    "contentUrl": "/events/1468920",
                    "venue": {
                        "id": "10469",
                        "name": "Queen Elizabeth Hall",
                        "contentUrl": "/clubs/10469",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "68263",
                            "name": "Abyss X",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e72"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1444380",
                    "title": "Ninety One Living Room presents: Philip Clouts Quartet",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1444380-1747428-front.jpg?dateUpdated=1629799507917",
                    "attending": 1,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T21:00:00.000",
                    "endTime": "2021-10-17T01:30:00.000",
                    "contentUrl": "/events/1444380",
                    "venue": {
                        "id": "187322",
                        "name": "Ninety One Living Room",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466828",
                    "title": "Format Music dnb",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1466828-1799446-front.jpg?dateUpdated=1632429164880",
                    "attending": 1,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T21:00:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1466828",
                    "venue": {
                        "id": "189326",
                        "name": "The Castle",
                        "contentUrl": "/clubs/189326",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1443801",
                    "title": "Hard Generation 2021 Tour - Torquay",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1443801-front.jpg?dateUpdated=1620899113290",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1443801",
                    "venue": {
                        "id": "187386",
                        "name": "The Foundry",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "13545",
                            "name": "MKN",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e73"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1444467",
                    "title": "West End Pub Crawl // 5 Venues // Free Shots // Discounted Drinks More",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1444467-front.jpg?dateUpdated=1621502617777",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T19:30:00.000",
                    "endTime": "2021-10-17T03:00:00.000",
                    "contentUrl": "/events/1444467",
                    "venue": {
                        "id": "10856",
                        "name": "Ruby Blue",
                        "contentUrl": "/clubs/10856",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1463732",
                    "title": "Low Freqz Collective - Part I",
                    "flyerFront": null,
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T19:00:00.000",
                    "endTime": "2021-10-17T01:30:00.000",
                    "contentUrl": "/events/1463732",
                    "venue": {
                        "id": "147611",
                        "name": "The Glove That Fits",
                        "contentUrl": "/clubs/147611",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "95078",
                            "name": "Buer",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e74"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466470",
                    "title": "Free Yard: Benjamin D, Chey Selecta, Jay Dolce, Matty Chiabi & Ngozi Diamond",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1466470-front.jpg?dateUpdated=1632309167847",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1466470",
                    "venue": {
                        "id": "144451",
                        "name": "Tola",
                        "contentUrl": "/clubs/144451",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "102513",
                            "name": "Chey Selecta",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e75"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467985",
                    "title": "Sean Innit (Peace Frequency)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1467985-front.jpg?dateUpdated=1632845206087",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T19:30:00.000",
                    "endTime": "2021-10-16T23:59:00.000",
                    "contentUrl": "/events/1467985",
                    "venue": {
                        "id": "162159",
                        "name": "Dartmouth Arms",
                        "contentUrl": "/clubs/162159",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "53325",
                            "name": "Sean Innit",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e76"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1472196",
                    "title": "Daughters Of Frank 4 Hour set",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1472196-front.jpg?dateUpdated=1634133172103",
                    "attending": 0,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T20:00:00.000",
                    "endTime": "2021-10-17T00:00:00.000",
                    "contentUrl": "/events/1472196",
                    "venue": {
                        "id": "3393",
                        "name": "Cafe 1001",
                        "contentUrl": "/clubs/3393",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "102426",
                            "name": "Daughters of Frank",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e77"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1371936",
                    "title": "Transmissions: Wormhole Curated by Objekt",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1371936-1742209-front.jpg?dateUpdated=1634227223973",
                    "attending": 617,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T22:00:00.000",
                    "endTime": "2021-10-17T06:00:00.000",
                    "contentUrl": "/events/1371936",
                    "venue": {
                        "id": "4567",
                        "name": "Village Underground",
                        "contentUrl": "/clubs/4567",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "26786",
                            "name": "Objekt",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e78"
                            }
                        },
                        {
                            "id": "67130",
                            "name": "TSVI",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e79"
                            }
                        },
                        {
                            "id": "79499",
                            "name": "Sayang",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e7a"
                            }
                        },
                        {
                            "id": "87803",
                            "name": "OK Williams",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e7b"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1444605",
                    "title": "[CANCELLED] The Nest 001",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/7/uk-0710-1444605-1799546-front.jpg?dateUpdated=1634050671837",
                    "attending": 32,
                    "date": "2021-10-16T00:00:00.000",
                    "startTime": "2021-10-16T19:00:00.000",
                    "endTime": "2021-10-17T04:00:00.000",
                    "contentUrl": "/events/1444605",
                    "venue": {
                        "id": "181160",
                        "name": "Dalston Den",
                        "contentUrl": "/clubs/181160",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "72501",
                            "name": "Sam Skeet",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e7c"
                            }
                        },
                        {
                            "id": "72884",
                            "name": "Shane Mahon",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e7d"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1453303",
                    "title": "17 Oct: Palms Trax, Nu Genea, Kampire & Vale Budino",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1453303-front.jpg?dateUpdated=1633358903373",
                    "attending": 346,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T16:00:00.000",
                    "endTime": "2021-10-17T22:00:00.000",
                    "contentUrl": "/events/1453303",
                    "venue": {
                        "id": "106730",
                        "name": "Phonox",
                        "contentUrl": "/clubs/106730",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "37323",
                            "name": "Palms Trax",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e7e"
                            }
                        },
                        {
                            "id": "58577",
                            "name": "Nu Genea",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e7f"
                            }
                        },
                        {
                            "id": "60056",
                            "name": "Budino",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e80"
                            }
                        },
                        {
                            "id": "76354",
                            "name": "Kampire",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e81"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1384775",
                    "title": "The Sesh",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1384775-1802572-front.jpg?dateUpdated=1632909106390",
                    "attending": 321,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T23:00:00.000",
                    "endTime": "2021-10-18T02:30:00.000",
                    "contentUrl": "/events/1384775",
                    "venue": {
                        "id": "1557",
                        "name": "Brixton Jamm",
                        "contentUrl": "/clubs/1557",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "53241",
                            "name": "Danny Blaze",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e82"
                            }
                        },
                        {
                            "id": "102270",
                            "name": "Meltout Crew",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e83"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1444065",
                    "title": "Toi Toi presents Herodot & Cem Ozden",
                    "flyerFront": null,
                    "attending": 35,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T12:00:00.000",
                    "endTime": "2021-10-17T23:00:00.000",
                    "contentUrl": "/events/1444065",
                    "venue": {
                        "id": "122921",
                        "name": "Lion and Lamb",
                        "contentUrl": "/clubs/122921",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "12163",
                            "name": "Herodot",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e84"
                            }
                        },
                        {
                            "id": "67268",
                            "name": "Cem Ozden",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e85"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464459",
                    "title": "MF Pres. Black Tulip with Ansome",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1464459-front.jpg?dateUpdated=1631624812837",
                    "attending": 25,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T16:00:00.000",
                    "endTime": "2021-10-17T22:30:00.000",
                    "contentUrl": "/events/1464459",
                    "venue": {
                        "id": "174167",
                        "name": "Werkhaus",
                        "contentUrl": "/clubs/174167",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "32872",
                            "name": "Theo Komp",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e86"
                            }
                        },
                        {
                            "id": "46453",
                            "name": "Anthony Segree",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e87"
                            }
                        },
                        {
                            "id": "46540",
                            "name": "Ansome",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e88"
                            }
                        },
                        {
                            "id": "64629",
                            "name": "Pre Silent",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e89"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464986",
                    "title": "Number 90 presents: Mackwood & Friends",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1464986-1799975-front.jpg?dateUpdated=1632502324333",
                    "attending": 7,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T18:00:00.000",
                    "endTime": "2021-10-17T22:00:00.000",
                    "contentUrl": "/events/1464986",
                    "venue": {
                        "id": "72207",
                        "name": "Number 90 Bar",
                        "contentUrl": "/clubs/72207",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468411",
                    "title": "Glamorous Afterparty",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1468411-front.jpg?dateUpdated=1632938291047",
                    "attending": 6,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T23:59:00.000",
                    "endTime": "2021-10-18T10:00:00.000",
                    "contentUrl": "/events/1468411",
                    "venue": {
                        "id": "170808",
                        "name": "Union Club, Vauxhall",
                        "contentUrl": "/clubs/170808",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "33250",
                            "name": "Trevor Fever",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e8a"
                            }
                        },
                        {
                            "id": "43746",
                            "name": "Kaos Kid",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e8b"
                            }
                        },
                        {
                            "id": "67346",
                            "name": "Terry George",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e8c"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1407540",
                    "title": "[CANCELLED] House Hub presents: Foundation",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2020/7/uk-0704-1407540-0-front.jpg?dateUpdated=1618241563757",
                    "attending": 4,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T15:00:00.000",
                    "endTime": "2021-10-18T00:00:00.000",
                    "contentUrl": "/events/1407540",
                    "venue": {
                        "id": "174167",
                        "name": "Werkhaus",
                        "contentUrl": "/clubs/174167",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468882",
                    "title": "She Made Invites Acme at Starlane",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1468882-front.jpg?dateUpdated=1633103660683",
                    "attending": 1,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T14:00:00.000",
                    "endTime": "2021-10-17T23:00:00.000",
                    "contentUrl": "/events/1468882",
                    "venue": {
                        "id": "151483",
                        "name": "Starlane Pizza Bar",
                        "contentUrl": "/clubs/151483",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "48706",
                            "name": "Ameliée",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e8d"
                            }
                        },
                        {
                            "id": "50233",
                            "name": "Aghnes",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e8e"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1461982",
                    "title": "Bashment Sundays - London's",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1461982-front.jpg?dateUpdated=1632690008213",
                    "attending": 0,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T18:00:00.000",
                    "endTime": "2021-10-18T01:00:00.000",
                    "contentUrl": "/events/1461982",
                    "venue": {
                        "id": "22343",
                        "name": "@ Bar and Bites",
                        "contentUrl": "/clubs/22343",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465468",
                    "title": "Brucie Bonus",
                    "flyerFront": null,
                    "attending": 0,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T21:00:00.000",
                    "endTime": "2021-10-18T03:00:00.000",
                    "contentUrl": "/events/1465468",
                    "venue": {
                        "id": "190096",
                        "name": "Brucie Bonus London",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "86315",
                            "name": "Paddy Galvin",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e8f"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471431",
                    "title": "Unfold Xvii",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1471431-1810492-front.jpg?dateUpdated=1633973389373",
                    "attending": 7,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T12:00:00.000",
                    "endTime": "2021-10-17T22:00:00.000",
                    "contentUrl": "/events/1471431",
                    "venue": {
                        "id": "155399",
                        "name": "FOLD",
                        "contentUrl": "/clubs/155399",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1460458",
                    "title": "Armchair Rooftop Soul Sessions - Roberta Cutolo In Session",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1460458-front.jpg?dateUpdated=1629907279790",
                    "attending": 1,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T14:00:00.000",
                    "endTime": "2021-10-17T20:00:00.000",
                    "contentUrl": "/events/1460458",
                    "venue": {
                        "id": "172847",
                        "name": "CLF Art Lounge & Roof Garden",
                        "contentUrl": "/clubs/172847",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471510",
                    "title": "Exotic House Sunday Brunch at Limin' Beach",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1017-1471510-front.jpg?dateUpdated=1634033156870",
                    "attending": 0,
                    "date": "2021-10-17T00:00:00.000",
                    "startTime": "2021-10-17T12:00:00.000",
                    "endTime": "2021-10-17T17:00:00.000",
                    "contentUrl": "/events/1471510",
                    "venue": {
                        "id": "189873",
                        "name": "Limin' Beach Club",
                        "contentUrl": "/clubs/189873",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "103420",
                            "name": "Kiara WL",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e90"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465647",
                    "title": "Black History Now: Fetishising Blackness - Recognising Power, Privilege and Fetishism in Kink.",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1018-1465647-1802678-front.jpg?dateUpdated=1633015961740",
                    "attending": 42,
                    "date": "2021-10-18T00:00:00.000",
                    "startTime": "2021-10-18T19:00:00.000",
                    "endTime": "2021-10-18T23:00:00.000",
                    "contentUrl": "/events/1465647",
                    "venue": {
                        "id": "190111",
                        "name": "The Old Queens Head Pub",
                        "contentUrl": null,
                        "live": false,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1457020",
                    "title": "Play London is BACK! The Biggest Weekly Monday Student Night in London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1018-1457020-front.jpg?dateUpdated=1628468469567",
                    "attending": 3,
                    "date": "2021-10-18T00:00:00.000",
                    "startTime": "2021-10-18T22:00:00.000",
                    "endTime": "2021-10-19T03:00:00.000",
                    "contentUrl": "/events/1457020",
                    "venue": {
                        "id": "33592",
                        "name": "XOYO",
                        "contentUrl": "/clubs/33592",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1472367",
                    "title": "Desire Magic Mondays",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1018-1472367-front.jpg?dateUpdated=1634159013070",
                    "attending": 2,
                    "date": "2021-10-18T00:00:00.000",
                    "startTime": "2021-10-18T23:59:00.000",
                    "endTime": "2021-10-19T08:00:00.000",
                    "contentUrl": "/events/1472367",
                    "venue": {
                        "id": "170808",
                        "name": "Union Club, Vauxhall",
                        "contentUrl": "/clubs/170808",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "54531",
                            "name": "Jefferson Souza",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e91"
                            }
                        },
                        {
                            "id": "69170",
                            "name": "Duwat?",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e92"
                            }
                        },
                        {
                            "id": "75095",
                            "name": "G Belmonte",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e93"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471777",
                    "title": "Kandy: UK Hip-Hop VS USA RnB at The Roxy (£2.20 Drinks)",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1018-1471777-front.jpg?dateUpdated=1634134912733",
                    "attending": 0,
                    "date": "2021-10-18T00:00:00.000",
                    "startTime": "2021-10-18T22:00:00.000",
                    "endTime": "2021-10-19T03:00:00.000",
                    "contentUrl": "/events/1471777",
                    "venue": {
                        "id": "41610",
                        "name": "The Roxy",
                        "contentUrl": "/clubs/41610",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469610",
                    "title": "Platforms",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1019-1469610-1806644-front.jpg?dateUpdated=1633944850247",
                    "attending": 117,
                    "date": "2021-10-19T00:00:00.000",
                    "startTime": "2021-10-19T22:00:00.000",
                    "endTime": "2021-10-20T03:00:00.000",
                    "contentUrl": "/events/1469610",
                    "venue": {
                        "id": "2587",
                        "name": "Corsica Studios",
                        "contentUrl": "/clubs/2587",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "79576",
                            "name": "Robek",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e94"
                            }
                        },
                        {
                            "id": "84173",
                            "name": "Tuva Luna",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e95"
                            }
                        },
                        {
                            "id": "93839",
                            "name": "Alpha Fett Baby",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e96"
                            }
                        },
                        {
                            "id": "101963",
                            "name": "ohmydais",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e97"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471748",
                    "title": "Milkshake, Ministry of Sound - London's Biggest Midweek Rave",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1019-1471748-front.jpg?dateUpdated=1634043757890",
                    "attending": 67,
                    "date": "2021-10-19T00:00:00.000",
                    "startTime": "2021-10-19T22:30:00.000",
                    "endTime": "2021-10-20T04:00:00.000",
                    "contentUrl": "/events/1471748",
                    "venue": {
                        "id": "725",
                        "name": "Ministry Of Sound",
                        "contentUrl": "/clubs/725",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1467794",
                    "title": "Paradox Tuesday at Egg London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1019-1467794-front.jpg?dateUpdated=1632826099990",
                    "attending": 4,
                    "date": "2021-10-19T00:00:00.000",
                    "startTime": "2021-10-19T23:00:00.000",
                    "endTime": "2021-10-20T04:00:00.000",
                    "contentUrl": "/events/1467794",
                    "venue": {
                        "id": "874",
                        "name": "Egg London",
                        "contentUrl": "/clubs/874",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469730",
                    "title": "Sneak Tuesday Rave at Xoyo - £3 Drinks",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1019-1469730-front.jpg?dateUpdated=1633441531893",
                    "attending": 2,
                    "date": "2021-10-19T00:00:00.000",
                    "startTime": "2021-10-19T22:00:00.000",
                    "endTime": "2021-10-20T03:00:00.000",
                    "contentUrl": "/events/1469730",
                    "venue": {
                        "id": "33592",
                        "name": "XOYO",
                        "contentUrl": "/clubs/33592",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1464836",
                    "title": "Теплота (Grundik Kasyansky & Tom Wheatley) Ute Kanngeisser",
                    "flyerFront": null,
                    "attending": 0,
                    "date": "2021-10-19T00:00:00.000",
                    "startTime": "2021-10-19T20:00:00.000",
                    "endTime": "2021-10-19T22:30:00.000",
                    "contentUrl": "/events/1464836",
                    "venue": {
                        "id": "102432",
                        "name": "Iklectik",
                        "contentUrl": "/clubs/102432",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1469769",
                    "title": "The London Disco",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1469769-front.jpg?dateUpdated=1634034836917",
                    "attending": 69,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T22:00:00.000",
                    "endTime": "2021-10-21T03:00:00.000",
                    "contentUrl": "/events/1469769",
                    "venue": {
                        "id": "33592",
                        "name": "XOYO",
                        "contentUrl": "/clubs/33592",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1462230",
                    "title": "Koreless",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1462230-1787633-front.jpg?dateUpdated=1630656449830",
                    "attending": 16,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T19:00:00.000",
                    "endTime": "2021-10-20T23:00:00.000",
                    "contentUrl": "/events/1462230",
                    "venue": {
                        "id": "937",
                        "name": "Electrowerkz",
                        "contentUrl": "/clubs/937",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "25506",
                            "name": "Koreless",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e98"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1458305",
                    "title": "Fade Every Wednesday at Fire & Lightbox London",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1458305-front.jpg?dateUpdated=1629106146720",
                    "attending": 8,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T23:00:00.000",
                    "endTime": "2021-10-21T04:00:00.000",
                    "contentUrl": "/events/1458305",
                    "venue": {
                        "id": "112736",
                        "name": "Fire & Lightbox",
                        "contentUrl": "/clubs/112736",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "88446",
                            "name": "AR DJ",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e99"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1468235",
                    "title": "Patterns Live Jazz: Say Suttin'",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1468235-front.jpg?dateUpdated=1632912844640",
                    "attending": 2,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T17:00:00.000",
                    "endTime": "2021-10-20T23:00:00.000",
                    "contentUrl": "/events/1468235",
                    "venue": {
                        "id": "115524",
                        "name": "NT's Loft",
                        "contentUrl": "/clubs/115524",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1465867",
                    "title": "Final CUT: R&B, Charts, House and More",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1465867-front.jpg?dateUpdated=1632159825167",
                    "attending": 1,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T22:30:00.000",
                    "endTime": "2021-10-21T04:00:00.000",
                    "contentUrl": "/events/1465867",
                    "venue": {
                        "id": "874",
                        "name": "Egg London",
                        "contentUrl": "/clubs/874",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1470743",
                    "title": "SIN BIN Sports Night at Loop Bar - Superhero Party // £2.75 Drinks",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1470743-front.jpg?dateUpdated=1633684417880",
                    "attending": 0,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T22:00:00.000",
                    "endTime": "2021-10-21T03:00:00.000",
                    "contentUrl": "/events/1470743",
                    "venue": {
                        "id": "177555",
                        "name": "The Loop",
                        "contentUrl": "/clubs/177555",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471132",
                    "title": "Get Wavey - London's Wildest Freshers Party",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1471132-front.jpg?dateUpdated=1633881837067",
                    "attending": 0,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T22:00:00.000",
                    "endTime": "2021-10-21T03:00:00.000",
                    "contentUrl": "/events/1471132",
                    "venue": {
                        "id": "47278",
                        "name": "Piccadilly Institute",
                        "contentUrl": "/clubs/47278",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1466549",
                    "title": "Corpora Aliena: Terra Incognita",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1466549-front.jpg?dateUpdated=1632331102023",
                    "attending": 1,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T19:30:00.000",
                    "endTime": "2021-10-20T22:00:00.000",
                    "contentUrl": "/events/1466549",
                    "venue": {
                        "id": "102432",
                        "name": "Iklectik",
                        "contentUrl": "/clubs/102432",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "85898",
                            "name": "avsluta",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e9a"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471580",
                    "title": "Nu Jazz Generations with Soft Power (Live), Free Entry",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1471580-front.jpg?dateUpdated=1634002984913",
                    "attending": 0,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T19:00:00.000",
                    "endTime": "2021-10-20T23:00:00.000",
                    "contentUrl": "/events/1471580",
                    "venue": {
                        "id": "172847",
                        "name": "CLF Art Lounge & Roof Garden",
                        "contentUrl": "/clubs/172847",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                },
                {
                    "_id": "1471749",
                    "title": "Billy Bonkers and The Everlasting Knob Throbber - First Show",
                    "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1020-1471749-0-front.jpg?dateUpdated=1634120404390",
                    "attending": 0,
                    "date": "2021-10-20T00:00:00.000",
                    "startTime": "2021-10-20T18:30:00.000",
                    "endTime": "2021-10-20T21:00:00.000",
                    "contentUrl": "/events/1471749",
                    "venue": {
                        "id": "190551",
                        "name": "Bonkers Bar",
                        "contentUrl": "/clubs/190551",
                        "live": true,
                        "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
                    },
                    "artists": [
                        {
                            "id": "6885",
                            "name": "Wilhelm",
                            "_id": {
                                "$oid": "625c40e496c7a90c87f21e9b"
                            }
                        }
                    ],
                    "city": "london",
                    "country": "uk",
                    "private": false,
                    "__v": 0
                }
            ];

            setTimeout(() => {
                resolve(data); // Daten erfolgreich abgerufen
            }, 1000); // Warte 1 Sekunde, bevor die Promise aufgelöst wird
        });
    }
}

