import React, { useState, useRef, useEffect } from "react"
import classNames from "classnames"
import { Trash } from "../icons"
import { OutlineButton } from "../buttons/OutlineButton"
import BgButton from "../buttons/BgButton"

type RoomGuestProps = {}

type RoomData = {
  id: number
  guestCount: number
}

const RoomGuest: React.FC<RoomGuestProps> = () => {
  const [showModal, setShowModal] = useState(false)
  const [roomCount, setRoomCount] = useState(1)
  const [guestCount, setGuestCount] = useState(1)
  const [totalGuestCount, setTotalGuestCount] = useState("1 Kamar, 1 Tamu")
  const [rooms, setRooms] = useState<RoomData[]>([{ id: 1, guestCount: 1 }])

  const RoomGuestRef = useRef<HTMLDivElement | null>(null)

  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleGuestCountIncrement = (id: number) => {
    setRooms(prevState =>
      prevState.map(room =>
        room.id === id && room.guestCount < 3
          ? { ...room, guestCount: room.guestCount + 1 }
          : room
      )
    )
  }

  const handleGuestCountDecrement = (id: number) => {
    setRooms(prevState =>
      prevState.map(room =>
        room.id === id && room.guestCount > 1
          ? { ...room, guestCount: room.guestCount - 1 }
          : room
      )
    )
  }

  const handleClickOutside = (event: any) => {
    if (RoomGuestRef.current && !RoomGuestRef.current.contains(event.target)) {
      setShowModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const getTotalGuestCount = () => {
    let totalGuests = 0
    let totalRooms = 0

    rooms.forEach(room => {
      totalGuests += room.guestCount
      totalRooms++
    })

    return `${totalRooms} Kamar, ${totalGuests} Tamu`
  }

  useEffect(() => {
    const newTotalGuestCount = getTotalGuestCount()
    setTotalGuestCount(newTotalGuestCount)
  }, [rooms])

  const renderRooms = () => {
    return rooms.map(room => (
      <div key={room.id} className="flex justify-between items-center my-4">
        <div>
          <h3 className="text-sm font-semibold">Kamar {room.id}</h3>
        </div>
        <div className="flex gap-4">
          <div className="flex">
            <button
              onClick={() => handleGuestCountDecrement(room.id)}
              className="px-2 font-medium border rounded bg-bgPrimary text-white"
            >
              -
            </button>
            <span className="mx-4 font-semibold">{room.guestCount}</span>
            <button
              onClick={() => handleGuestCountIncrement(room.id)}
              className="px-2 font-medium border rounded bg-bgPrimary text-white"
            >
              +
            </button>
          </div>
          {rooms.length > 1 && (
            <button onClick={() => handleDeleteRoom(room.id)}>
              <Trash width="17" height="17" stroke="#F17674" />
            </button>
          )}
        </div>
      </div>
    ))
  }

  const handleAddRoom = () => {
    setRooms(prevState => [
      ...prevState,
      { id: prevState.length + 1, guestCount: 1 },
    ])
    setRoomCount(prevState => prevState + 1)
  }

  const handleDeleteRoom = (id: number) => {
    setRooms(prevState => prevState.filter(room => room.id !== id))
    setRoomCount(prevState => prevState - 1)
  }

  const modalClasses = classNames(
    "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex justify-center items-center",
    {
      hidden: !showModal,
    }
  )

  return (
    <div
      ref={RoomGuestRef}
      className="px-3 py-1 w-34 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md"
    >
      <button onClick={handleModalOpen} className="text-xs text-textPrimary">
        {totalGuestCount}
      </button>
      <div className={modalClasses} onClick={(e: any) => e.stopPropagation()}>
        <div className="bg-white w-80 p-6 rounded-md">
          <div className="flex justify-between items-center px-4">
            <h1 className="text-md font-bold">Room</h1>
            <h1 className="text-md font-bold">Guest</h1>
          </div>
          <hr className="my-2" />
          {renderRooms()}
          <hr className="mb-4" />
          <div className="flex justify-between items-center">
            <OutlineButton
              title="Close"
              textSize="10px"
              padding="5px 10px"
              onClick={handleModalClose}
            />
            <BgButton
              title="Add Room"
              textSize="10px"
              padding="5px 10px"
              onClick={handleAddRoom}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomGuest
