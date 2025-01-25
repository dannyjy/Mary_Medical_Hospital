import {FaCalendarCheck} from "react-icons/fa6";
import {SiTicktick} from "react-icons/si";
import {FaTrash} from "react-icons/fa";

export const GalleryData = [
    {
        ImageUrl:'/Images/image.jpg',
    },{
        ImageUrl:'/Images/img2.jpg',
    },{
        ImageUrl:'/Images/img3.jpg',
    },{
        ImageUrl:'/Images/img4.jpg',
    }
]

export const DoctorsData = [
    {
        imageUrl:'/Images/doctor1.jpg',
        specality:'Genetic Specialist',
        doctorName: 'Dr.Chris Daniel',
        basicDetail: 'His is specialized in genetics ,inhertance and  mutantion'
    },{
        imageUrl:'/Images/doctor2.jpg',
        specality:'Surgen',
        doctorName: 'Dr.Jane Doe',
        basicDetail: 'She is specialized in surgery and heart surgery'
    },{
        imageUrl:'/Images/doctor3.jpg',
        specality:'Cardiologist',
        doctorName: 'Dr.Elizabeth Wilson',
        basicDetail: 'She is specialized in cardiology and operations'
    },{
        imageUrl:'/Images/doctor4.jpg',
        specality:'Neurologist',
        doctorName: 'Dr. John Doe',
        basicDetail: 'His is specialized in neurology and brain sergery'
    },{
        imageUrl:'/Images/doctor5.jpg',
        specality:'Pediatric',
        doctorName: 'Dr.David Willam',
        basicDetail: 'His is specialized in pediatry and children medical health.'
    },{
        imageUrl:'/Images/doctor6.jpg',
        specality:'Gynecologist',
        doctorName: 'Dr.Peter Hakim',
        basicDetail: 'His is specialized in gynecology and child birth.'
    },
]

export const AboutUsData = [
    {
        header: 'Care',
        content: 'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.',
    },{
        header: 'Patience',
        content: 'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.',
    },{
        header: 'Honesty',
        content: 'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.',
    },{
        header: 'Love',
        content: 'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.',
    },
]

export const TrustedCompaniesData = [
    {
        imageUrl:'/Images/med3.png',
    },{
        imageUrl:'/Images/med2.png',
    },{
        imageUrl:'/Images/med6.png',
    },{
        imageUrl:'/Images/med5.png',
    },{
        imageUrl:'/Images/med4.png',
    },{
        imageUrl:'/Images/med1.png',
    },
]

export const FooterData = [
    {
        footerHeader: 'Explore',
        link1: 'Our Doctors',
        link2: 'Appointment',
        link3: 'Contact us',
        link4: 'Our Gallery',
    }, {
        footerHeader: 'Specialized Medical',
        link1: 'Cardiolog',
        link2: 'Neurolog',
        link3: 'Pediatric',
        link4: 'Gynecologist',
    }, {
        footerHeader: 'Support Services',
        link1: 'Laboratory',
        link2: 'Pharmacy',
        link3: 'Imaging & Diagnostic',
        link4: 'Medical Health',
    }, {
        footerHeader: 'Useful Links',
        link1: 'Privacy Policy',
        link2: 'Terms of Use',
        link3: 'Ethics & Compliance',
        link4: 'Frequently Asked Questions',
    },
]

export const RouteAppointmentsData = [
    {
        location: "/home/Appointments",
        Icon: <FaCalendarCheck className="text-3xl"/>,
        DirectionName: 'Appointments',
    }, {
        location: "/home/Cancelled",
        Icon: <FaTrash className="text-3xl"/>,
        DirectionName: 'Cancelled',
    }, {
        location: "/home/Completed",
        Icon: <SiTicktick className="text-3xl"/>,
        DirectionName: 'Completed',
    },
    // {
    //     location: "/home/Rescheduled",
    //     Icon: <FaRegShareSquare className="text-3xl"/>,
    //     DirectionName: 'Rescheduled',
    // },
]