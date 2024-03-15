import clsx from "clsx";
import { NavLink,  } from "react-router-dom"

function navLink ({isActive}) {
    
    const style = clsx('py-3 px-3  flex gap-3 items-center hover:bg-[#3366FF] text-white', isActive && "bg-[#3366FF] font-bold")
    return style;
}

function ASideBar() {
    const sidebarItems = [
        {
            title: 'Dashboard',
            icon: '/assets/ion_home-sharp.png',
            route: "/"
        },

        {
            title: 'Attendence',
            icon: '/assets/uil_calender.png',
            route: '/attendence'
        },

        {
            title: 'Time Tracker',
            icon: '/assets/iconoir_page.png',
            route: '/time-tracker'
        },

        {
            title: 'Leave',
            icon: '/assets/bi_person-add.png',
            route: '/leave'
        },

        {
            title: 'Holiday',
            icon: '/assets/uis_lock.png',
            route: '/holiday'
        },

        {
            title: 'Change Password',
            icon: '/assets/uil_calender.png',
            route: '/change-password'
        },

        {
            title: 'LogOut',
            icon: '/assets/Vector (1).png',
            route: 'null'
        }


    ]

    return (
        <aside
            id="sidebar"
            className="col-span-3 bg-[#17263B] h-[100%]"
        >
            <div className="sm:hidden cursor-pointer absolute top-30 right-0 text-4xl text-white rounded-full bg-red-400">X</div>
            <nav className="flex flex-col w-full runded-md shadow-lg mt-[83px]">

                {/* AsideBar Item */}
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <NavLink key={index} className={navLink} to={item.route}>
                                <img src={item.icon} alt={item.title} />
                                {item.title}
                            </NavLink>
                        )
                    })
                }

            </nav>
        </aside>
    )
}

export default ASideBar;