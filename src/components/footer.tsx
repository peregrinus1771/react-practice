import dayjs from 'dayjs'

export const Footer: React.VFC = () => {
    const publishedYear = '2021'
    const thisYear = dayjs().format('YYYY')
    const year =
        publishedYear === thisYear
            ? publishedYear
            : `${publishedYear} - ${thisYear}`
    return (
        <footer className="flex justify-center items-center self-stretch pt-5 pb-2 mt-auto border-t-2">
            <p>@{year} Flik</p>
        </footer>
    )
}

// const Container = styled.footer`
//     border-top: solid 1px ${(props) => props.theme.text.secondary};

// `
// const Copyright = styled.p`
//     color: ${(props) => props.theme.text.secondary};
// `
