

function Navbar( {sethidden}) {
    const leftItems = [
        {
            title: "toggler",
            icon: '/assets/akar-icons_three-line-horizontal.png',
            onclick: () => sethidden((prevState) => !prevState ) 
        }
    ];

    const rightItems = [
        {
            title: "theme changer",
            icon: '/assets/ph_moon-bold.png'
        },
        {
            title: 'tabler_border-corners',
            icon: '/assets/tabler_border-corners.png'
        },
        {
            title: 'clarity_notification-solid',
            icon: '/assets/clarity_notification-solid.png'
        }
    ]

    return (
        <nav className="bg-white h-[70px] px-2 flex items-center justify-between runded-md shadow-md">
            {/* left Items */}
            <div>
                {
                    leftItems.map((item, index) => {
                        return <img onClick={item.onclick} className="bg-[#E8EEFD] p-2" key={index} src={item.icon} alt={item.name} />
                    })
                }
            </div>

                {/* Right side items */}
            <div className="flex gap-4">
            {
                    rightItems.map((item, index) => {
                        return <img className="bg-[#E8EEFD] p-2" key={index} src={item.icon} alt={item.name} />
                    })
                }
                <div className="bg-gray-400/80 h-[42px]  w-10 rounded-lg">

                </div>
            </div>

        </nav>
    )
}

export default Navbar;