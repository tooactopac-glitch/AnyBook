import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Feed from "../components/Feed";
import Profile from "../components/Profile";
import { GrClose } from "react-icons/gr";

export default function Home() {
  const [isOpenRightSideBare, setIsOpenRightSideBare] = useState(false);
  const [isOpenLeftSideBare, setIsOpenLeftSideBare] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const [posts, setPosts] = useState([
    {
      post: {
        id: "post-001",
        timestamp: "2025-11-10T15:57:00+01:00",
        user: {
          name: "Ahmed Benali",
          profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
          location: "Sahara, Morocco",
        },
        content: {
          text: "Just arrived in the heart of the Sahara! The golden dunes at sunset are unreal. Living the dream in <strong>#Morocco</strong> desert",
          image: {
            src: "https://tse4.mm.bing.net/th/id/OIP.acE2ILyQQx43utXRB0h_PQHaD_?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
            alt: "Sahara Desert Sunset",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 127,
          comments: 24,
          shares: 8,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-002",
        timestamp: "2025-11-10T15:30:00+01:00",
        user: {
          name: "Fatima Zahra",
          profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
          location: "Marrakech, Morocco",
        },
        content: {
          text: "Jemaa el-Fnaa at night is pure magic! Lanterns, music, and the smell of fresh tagine. <strong>#Marrakech</strong> lantern",
          image: {
            src: "https://th.bing.com/th/id/R.200fd9c0efeabfa2ac41005729320bef?rik=7z6zWoDfNwh%2bcg&riu=http%3a%2f%2finspirationseek.com%2fwp-content%2fuploads%2f2016%2f02%2fMarrakech-City-Market-Pictures.jpg&ehk=rcNTktlJhHKQ7bNETTKaa4TK2tN5jvkM1gdPVePDds4%3d&risl=&pid=ImgRaw&r=0",
            alt: "Jemaa el-Fnaa Night Market",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 89,
          comments: 12,
          shares: 3,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-003",
        timestamp: "2025-11-10T14:15:00+01:00",
        user: {
          name: "Youssef El Amrani",
          profilePic: "https://randomuser.me/api/portraits/men/68.jpg",
          location: "Chefchaouen, Morocco",
        },
        content: {
          text: "Lost in the blue streets of Chefchaouen. Every wall tells a story. <strong>#BluePearl</strong> blue heart",
          image: {
            src: "https://tse4.mm.bing.net/th/id/OIP.H6ju8ob-V5IkGG1PFHNV_wHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
            alt: "Blue Streets of Chefchaouen",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 203,
          comments: 38,
          shares: 11,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-004",
        timestamp: "2025-11-10T13:45:00+01:00",
        user: {
          name: "Amina Khalil",
          profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
          location: "Casablanca, Morocco",
        },
        content: {
          text: "Golden hour at Hassan II Mosque. The ocean breeze and intricate details are breathtaking. <strong>#Casablanca</strong> mosque",
          image: {
            src: "https://tse1.mm.bing.net/th/id/OIP.jIWNlDcZ78vjDCux06H83gHaE8?cb=ucfimg2ucfimg=1&w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
            alt: "Hassan II Mosque at Sunset",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 156,
          comments: 19,
          shares: 7,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-005",
        timestamp: "2025-11-10T12:20:00+01:00",
        user: {
          name: "Omar Benjelloun",
          profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
          location: "Fes, Morocco",
        },
        content: {
          text: "Exploring the ancient medina of Fes. Got lost in the souks and found the best leather shop! <strong>#Fes</strong> bag",
          image: {
            src: "https://tse3.mm.bing.net/th/id/OIP.-YBO4sPWQgL1XPhZ8r7UAAHaFi?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
            alt: "Fes Medina Market",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 94,
          comments: 15,
          shares: 5,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-006",
        timestamp: "2025-11-10T11:10:00+01:00",
        user: {
          name: "Laila Cherkaoui",
          profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
          location: "Rabat, Morocco",
        },
        content: {
          text: "Morning coffee with a view of the Atlantic. Rabat's coastline never gets old. <strong>#Rabat</strong> coffee",
          image: {
            src: "https://tse1.mm.bing.net/th/id/OIP.Ktc-zIblOohZIHEm6D2FwgHaE7?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
            alt: "Rabat Coastline",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 67,
          comments: 9,
          shares: 2,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-007",
        timestamp: "2025-11-10T10:05:00+01:00",
        user: {
          name: "Khalid Alami",
          profilePic: "https://randomuser.me/api/portraits/men/56.jpg",
          location: "Agadir, Morocco",
        },
        content: {
          text: "Beach day in Agadir! The waves are calling and I must go. <strong>#Agadir</strong> wave",
          image: {
            src: "https://cdn.getyourguide.com/img/location/5cf677a674369.jpeg/88.jpg",
            alt: "Agadir Beach",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 112,
          comments: 18,
          shares: 6,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-008",
        timestamp: "2025-11-10T09:30:00+01:00",
        user: {
          name: "Nadia Rahmani",
          profilePic: "https://randomuser.me/api/portraits/women/67.jpg",
          location: "Essaouira, Morocco",
        },
        content: {
          text: "Windy morning in Essaouira. The kitesurfers are out and the medina is peaceful. <strong>#Essaouira</strong> wind",
          image: {
            src: "https://exploreessaouira.com/wp-content/uploads/2022/08/Kitesurfing-Essaouira-feature-1080x772.jpg",
            alt: "Essaouira Kitesurfing",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 78,
          comments: 11,
          shares: 4,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-009",
        timestamp: "2025-11-10T08:45:00+01:00",
        user: {
          name: "Reda Zniber",
          profilePic: "https://randomuser.me/api/portraits/men/41.jpg",
          location: "Tangier, Morocco",
        },
        content: {
          text: "Ferry from Spain to Tangier complete! First stop: fresh seafood by the port. <strong>#Tangier</strong> fish",
          image: {
            src: "https://th.bing.com/th/id/R.52f9bd3668682c58a229983aaea060dd?rik=vv%2fjMVfw3CAabw&riu=http%3a%2f%2fwww.cruisemapper.com%2fimages%2fports%2f680-4542b74f322f.jpg&ehk=5Hv%2fFsDD9plXBH5D0rhQyUgihIUqw%2buDyM0jqq7urD8%3d&risl=&pid=ImgRaw&r=0",
            alt: "Tangier Port",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 53,
          comments: 7,
          shares: 2,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
    {
      post: {
        id: "post-010",
        timestamp: "2025-11-10T07:20:00+01:00",
        user: {
          name: "Siham Alaoui",
          profilePic: "https://randomuser.me/api/portraits/women/59.jpg",
          location: "Ouarzazate, Morocco",
        },
        content: {
          text: "Early morning shoot at Ait Benhaddou. This UNESCO site is straight out of a movie! <strong>#Ouarzazate</strong> camera",
          image: {
            src: "https://tse2.mm.bing.net/th/id/OIP.Rj1pWqkZzLZRThDVWAMBAwHaEV?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
            alt: "Ait Benhaddou Kasbah",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 145,
          comments: 22,
          shares: 9,
        },
        actions: ["Like", "Comment", "Share"],
      },
      post: {
        id: "post-010",
        timestamp: "2025-11-10T07:20:00+01:00",
        user: {
          name: "Hamid",
          profilePic:
            "https://tse3.mm.bing.net/th/id/OIP.SYNNLMPpKoJQVK-J0gSiTAHaIv?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
          location: "Ouarzazate, Morocco",
        },
        content: {
          text: "Chtek gbrti 3lya kay simohamed",
          image: {
            src: "",
            alt: "crappa",
          },
        },
        engagement: {
          reactions: [{ type: "Like", count: null }],
          totalReactions: 10000,
          comments: 22000,
          shares: 90,
        },
        actions: ["Like", "Comment", "Share"],
      },
    },
  ]);

  const [contacts, setContacts] = useState([
    {
      name: "Sara El Mansouri",
      status: "Online",
      isOnline: true,
      avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    },
    {
      name: "Omar Benjelloun",
      status: "Last seen 5 min ago",
      isOnline: false,
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Laila Cherkaoui",
      status: "Online",
      isOnline: true,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "Khalid Alami",
      status: "Typing...",
      isOnline: false,
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      name: "Nadia Rahmani",
      status: "Last seen 1h ago",
      isOnline: false,
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    {
      name: "Youssef Tazi",
      status: "Online",
      isOnline: true,
      avatar: "https://randomuser.me/api/portraits/men/89.jpg",
    },
    {
      name: "Amina Bouziane",
      status: "Away",
      isOnline: false,
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Salma Naji",
      status: "Online",
      isOnline: true,
      avatar: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    {
      name: "Tarek Chraibi",
      status: "Away",
      isOnline: false,
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Hajar Fassi",
      status: "Online",
      isOnline: true,
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      name: "Ayoub Lamrani",
      status: "Last seen 12 min ago",
      isOnline: false,
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      name: "Reda Zniber",
      status: "Online",
      isOnline: true,
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Siham Alaoui",
      status: "Last seen 3 min ago",
      isOnline: false,
      avatar: "https://randomuser.me/api/portraits/women/59.jpg",
    },
    {
      name: "Imad Berrada",
      status: "Typing...",
      isOnline: false,
      avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    },
  ]);

  const [suggFriends, setSuggFriends] = useState([
    {
      name: "Nora Idrissi",
      meta: "3 mutual friends",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
      name: "Hamza Belhaj",
      meta: "From Casablanca",
      avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    },
    {
      name: "Zineb Lahbabi",
      meta: "Works at Maroc Telecom",
      avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      name: "Adil Saadi",
      meta: "1 mutual friend",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      name: "Rania Touzani",
      meta: "Studies at UM6P",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      name: "Sami Chami",
      meta: "From Rabat",
      avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    {
      name: "Inès Benkirane",
      meta: "5 mutual friends",
      avatar: "https://randomuser.me/api/portraits/women/27.jpg",
    },
    {
      name: "Bilal Mezouari",
      meta: "Followed by 2 friends",
      avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
      name: "Ghita El Fassi",
      meta: "Lives in Marrakech",
      avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      name: "Karim Ouazzani",
      meta: "Knows Arabic & French",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
  ]);

  // useEffect(() => {
  //     const handleResize = () => {
  //     if (window.innerWidth >= 768){
  //         setIsOpenRightSideBare(false)
  //         setIsOpenLeftSideBare(false)
  //     }
  //     };
  //     window.addEventListener("resize", handleResize);
  //     handleResize();
  //     return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div id="home">
      <Navbar
        iorsb={setIsOpenRightSideBare}
        iorsbbValue={isOpenRightSideBare}
        iolsb={setIsOpenLeftSideBare}
        iolsbValue={isOpenLeftSideBare}
        iop={setIsOpenProfile}
        iopValue={isOpenProfile}
      />

      <RightSideBar
        isOpenR={isOpenRightSideBare}
        setIsOpenR={setIsOpenRightSideBare}
        suggFriends={suggFriends}
      />

      <LeftSideBar
        isOpenL={isOpenLeftSideBare}
        setIsOpenL={setIsOpenLeftSideBare}
        contacts={contacts}
      />

      {isOpenProfile ? <Profile /> : <Feed posts={posts} />}
    </div>
  );
}
