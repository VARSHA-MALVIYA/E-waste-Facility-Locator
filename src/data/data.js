import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SignupForm'
import LoginImg from '../assets/login-img.jpg'
import SignupImg from '../assets/signup-img.jpg'

import DesktopImg from '../assets/desktop-laptop-computer.webp'
import TabletImg from '../assets/tablet.jpg'
import PheripheralImg from '../assets/pheripheral.jpg'
import MobileImg from '../assets/smartphone.jpg'
import SmartwatchesImg from '../assets/smartwatches.webp'
import AccessoriesImg from '../assets/mobileAccessories.webp'
import HomeEntertainmentImg from '../assets/home_appliances.jpg'
import KitchenImg from '../assets/kitchen_appliances.jpg'
import LargeAppliances from '../assets/big_appliances.webp'
import RechargeableBattery from '../assets/Rechargeable-Batteries.jpg'
import LithiumionBattery from '../assets/Lithium-Battery.webp'
import AABattery from '../assets/aaaaBattery.jpg'
import CameraComponentsImg  from '../assets/camera_components.jpg'
import GamingComponentImg from '../assets/gaming_components.png'
import EcomponentImg from '../assets/e_components.png'



export const LoginDets = {
    title:"Welcome Back!",
    associatedUrl:"/signup",
    img:LoginImg,
    type:"login",
    Form:LoginForm
}

export const SignupDets = {
    title:"Signup for Account",
    associatedUrl:"/login",
    img:SignupImg,
    type:"signup",
    Form:SignupForm
}


export const ECardData = [
    {
        title:"Computers/Desktops",
        data:[
            {
                title:"Desktop/Computers",
                description:"Desktop computers, stationary and powerful, comprise a central processing unit, monitor, keyboard, and mouse. Ideal for various tasks, from office work to gaming and content creation.",
                img:DesktopImg
            },
            {
                title:"Tablets",
                description:"Tablets are portable touchscreen devices, smaller than laptops but larger than smartphones. They offer versatility for browsing, entertainment, and productivity tasks, with a focus on mobility and intuitive touch-based interactions.",
                img:TabletImg
            },
            {
                title:"Peripherals ",
                description:"Peripherals are external devices that complement a computer, such as keyboards, mice, printers, and speakers. They expand functionality and enhance user experience, enabling input, output, and interaction with the computer system.",
                img:PheripheralImg
            }
        ]
    },

    {
        title:"Mobile Devices",
        data:[
            {
                title:"Smartphones",
                description:"Smartphones are handheld mobile devices that combine communication, computing, and multimedia capabilities. They enable users to make calls, send messages, browse the internet, access apps, and capture photos and videos, all in a compact and portable form factor.",
                img:MobileImg
            },
            {
                title:"Wearables",
                description:"Wearables are electronic devices worn on the body, such as smartwatches, fitness trackers, and augmented reality glasses. They offer features like health monitoring, notifications, and hands-free interaction, enhancing convenience and connectivity in daily life.",
                img:SmartwatchesImg
            },
            {
                title:"Accessories",
                description:"Accessories encompass additional items accompanying electronic devices, such as chargers, cases, headphones, and styluses. They provide customization, protection, and convenience, enhancing the functionality and usability of the primary device.",
                img:AccessoriesImg
            }
        ]
    },

    {
        title:"Appliances",
        data:[
            {
                title:"Large Appliances",
                description:"Big appliances refer to large-scale electronic devices typically found in homes, such as refrigerators, washing machines, dishwashers, and ovens. They are essential for daily household tasks, including food storage, laundry, and dishwashing, providing convenience and efficiency in managing domestic chores.",
                img:LargeAppliances
            },
            {
                title:"Kitchen Appliances",
                description:"Kitchen Appliances comprise electronic devices used for food preparation and cooking tasks in the kitchen, such as microwaves, blenders, toasters, and coffee makers. They streamline cooking processes, save time, and enhance culinary experiences, making meal preparation efficient and enjoyable.",
                img:KitchenImg
            },
            {
                title:"Home Entertainment",
                description:"Home Entertainment includes electronic devices designed for leisure and relaxation within the household, such as TVs, sound systems, gaming consoles, and streaming devices. These devices offer immersive audiovisual experiences, enhancing leisure and social activities for individuals and families.",
                img:HomeEntertainmentImg
            }
        ]
    },

    {
        title:"Batteries",
        data:[
            {
                title:"AA/AAA Batteries",
                description:"AA/AAA Batteries are common types of disposable batteries used in various electronic devices such as remote controls, toys, and flashlights. They provide portable power for low to moderate energy consumption devices and are widely available in stores due to their popularity and compatibility.",
                img:AABattery
            },
            {
                title:"Rechargeable Batteries",
                description:"Rechargeable Batteries are energy storage units that can be reused by recharging after depletion. Commonly found in devices like cameras, remote controls, and portable electronics, they offer cost-effectiveness and reduced waste compared to single-use batteries, contributing to sustainability efforts and environmental conservation.",
                img:RechargeableBattery
            },
            {
                title:"Lithium-ion Batteries",
                description:"Lithium-ion Batteries are rechargeable power sources commonly used in electronic devices like smartphones, laptops, and electric vehicles. Known for their high energy density and long lifespan, they provide portable and efficient energy storage, powering a wide range of modern gadgets and vehicles.",
                img:LithiumionBattery
            }
        ]
    },

    {
        title:"Miscellaneous",
        data:[
            {
                title:"Electronic Components",
                description:"Electronic Components are fundamental parts used in the construction and functioning of electronic circuits and devices. This category includes resistors, capacitors, transistors, diodes, and integrated circuits (ICs). Electronic components enable the manipulation and control of electrical signals, facilitating the creation of complex electronic systems for various applications.",
                img:EcomponentImg
            },
            {
                title:"Gaming Consoles",
                description:"Gaming Consoles are dedicated electronic devices designed for playing video games. They offer powerful hardware, specialized controllers, and access to a wide range of gaming titles. Gaming consoles provide immersive gaming experiences, social interaction, and entertainment for players of all ages and skill levels.",
                img:GamingComponentImg
            },
            {
                title:"Cameras Equipments",
                description:"Cameras and Photography Equipment encompass electronic devices used for capturing and processing images and videos. This category includes digital cameras, lenses, tripods, and photo editing software. These tools enable photographers to express creativity, document memories, and pursue professional projects with precision and versatility.",
                img:CameraComponentsImg
            }
        ]
    },
]

export const ECardNavItems = [
    "Computers/Desktops",
    "Mobile Devices",
    "Appliances",
    "Batteries",
    "Miscellaneous"
]


