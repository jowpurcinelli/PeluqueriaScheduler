import React, { 
    useState, 
    useCallback,
    useEffect, 
    useMemo,
    useContext, } from 'react';
import { isToday, format, parseISO, isAfter } from 'date-fns';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { useAuth } from '';

interface MonthAvailabilityItem {
    day: number,
    available: boolean,
};

interface Appointment {
    id: string,
    date: string,
    hourFormatted: string,
    user: {
        name: string,
        avatar_url: string,
    }
};



const Dashboard: React.FC = () => {
    const { logo } = useContext(ThemeContext)

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const [monthAvailability, setMonthAvailability] = useState<MonthAvailabilityItem[ ] 
    >( [  ] )

    const [appointments, setAppointments] = useState<Appointment[ ]>([  ])
    const { signOut, user  } = useAuth()

    const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
        if (modifiers.available && !modifiers.disabled) {
            setSelectedDate(day)
        }
    }, [  ] )

    const handleMonthChange = useCallback((month: Date) => {
        setCurrentMonth(month)
    }, [  ])

    useEffect(() => {
        api 
            .get(`/providers/${user.id}/month-availability`, {
                params: {
                    year: currentMonth.getFullYear(),
                    month: currentMonth.getMonth() + 1,
                },
            })
            .then(response => {
                setMonthAvailability(response.data)
            })
    })

}








//Ideia de ultima hora e nois cachorro
// Segue os passos
// A ideia e fazer um software para aprender a tocar bateria a principio.
// Com algum algoritmo doido ai para reconhecer a bateria fisica como algo 3d, e mostrar na tela onde tocar
// A ideia a principio e basica, mas pode-se elaborar muitos designs interessantes para cada <coisa className="">



</coisa>



// outra ideia doida:
// Matheus q sabe design: Chama-lo para fazer um game, quisaz em js mesmo?
// A ideia de desenhar graficamente a paisagem e incrivel! keep  it going!
