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

export { TABS, SilidingData };