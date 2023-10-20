'use client'

import Image from 'next/image'
import React from 'react'
import IconButton from '../ui/IconButton'
import { redirect } from 'next/navigation'
import CreateRoomButton from './CreateRoomButton'

function ButtonsMenuList() {
    const handleSubmit = React.useCallback(function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault()
        const roomCode = e.currentTarget['roomCode'].value as string
        redirect(`/rooms/${roomCode}`)
    },
    [])

    return (
        <div className="flex flex-col xl:flex-row justify-center w-full">
            <CreateRoomButton />
            <button
                className="btn btn-secondary btn-md xl:btn-lg w-50 m-2"
                onClick={() => (window as any).search_room.showModal()}
            >
                <Image
                    src={'/assets/icons/secondary/Search_alt_fill.svg'}
                    alt="Create Icon"
                    width={35}
                    height={35}
                />
                TÌM PHÒNG
            </button>
            <dialog id="search_room" className="modal">
                <div className="modal-box w-full bg-bamboo-400">
                    <form onSubmit={handleSubmit} method="dialog">
                        <IconButton
                            iconSrc="/assets/icons/primary/Dell_fill.svg"
                            iconAlt="Icon Close"
                            buttonVariants="btn-primary"
                            buttonStyle="btn-circle"
                            className="absolute right-2 top-2"
                        />
                        <h3 className="text-3xl text-bamboo-100 py-4">
                            TÌM PHÒNG
                        </h3>
                        <div className="px-4">
                            <input
                                type="text"
                                required
                                name="roomCode"
                                placeholder="Nhập mã phòng hoặc link phòng..."
                                className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg mb-5"
                            />
                            <div className="pb-4">
                                <input
                                    type="submit"
                                    value="VÀO PHÒNG"
                                    className="btn btn-md btn-secondary w-full"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {/* closes when clicked outside */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default ButtonsMenuList
