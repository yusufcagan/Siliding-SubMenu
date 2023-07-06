import Star from '../assets/icons/star.png'
import LittleFinger from '../assets/icons/little_finger.png'
import Finger from '../assets/icons/finger.png'
import Futball from '../assets/icons/soccer.png'
import Basketball from '../assets/icons/basketball.png'
import Volleyball from '../assets/icons/volleyball.png'
import TimerClock from '../assets/icons/timer.png'
import Mma from '../assets/icons/mma.png'

const TABS = [
    { name: "bulten", label: "Bültenim", src: Star, color: '#FFA500' },
    { name: "canli", label: "Canlı", src: LittleFinger, color: '#FF0000' },
    { name: "mac", label: "Maç Önü", src: Finger, color: '#008000' }
]

const SilidingData = [
    { name: 'Futboll', label: 'Futbol', src: Futball },
    { name: 'Basketball', label: 'Basketbol', src: Basketball },
    { name: 'Volleyball', label: 'Voleybol', src: Volleyball },
    { name: 'timer', label: 'Uzun Vadeli', src: TimerClock },
    { name: 'Mma', label: 'MMA', src: Mma }
]

const Match = [
    { id: 0, name1: 'Samsunspor', name2: 'Pendikspor', section: 'fut', online: true, finish: false, fav: false },
    { id: 1, name1: 'Galatasayar', name2: 'Fenerbahçe', section: 'fut', online: true, finish: false, fav: true },
    { id: 2, name1: 'Beşiktaş', name2: 'Başakşehir', section: 'fut', online: false, finish: true, fav: false },
    { id: 3, name1: 'Anadoluefes', name2: 'Tofaş', section: 'bas', online: true, finish: false, fav: true },
    { id: 4, name1: 'Türktelekom', name2: 'Darüşşafaka', section: 'bas', online: false, finish: true, fav: false },
    { id: 5, name1: 'Vakıfbankspor', name2: 'Fenerbahçe Kadın Voleybol', section: 'vol', online: true, finish: false, fav: false },
    { id: 6, name1: 'Eczacıbaşı', name2: 'Sarıyerbelediyespor', section: 'vol', online: false, finish: true, fav: true },
    { id: 7, name1: 'Çanakkake', name2: 'MMA Ankara', section: 'mma', online: false, finish: true, fav: false },
    { id: 8, name1: 'Denizkoçspor', name2: 'SimurgFight', section: 'mma', online: true, finish: false, fav: false },
    { id: 9, name1: 'TED Ankara', name2: 'İlbanks', section: 'vol', online: false, finish: false, fav: true },
    { id: 10, name1: 'Pınarkarşıkaya', name2: 'Bahçeşehir Koleji', section: 'bas', online: true, finish: false, fav: false },
    { id: 11, name1: 'Gaziantep', name2: 'Sivasspor', section: 'fut', online: false, finish: false, fav: false },

]
export { TABS, SilidingData, Match };