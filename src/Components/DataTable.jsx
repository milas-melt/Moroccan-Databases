const data = [
    {
        title: "Morocco's open data portal",
        source: "Morocco's open data portal (no date) ACCUEIL | Portail de l'Open Data au Maroc. Available at: https://data.gov.ma/ (Accessed: February 26, 2023).",
        link: "https://data.gov.ma/",
        type: "Databases",
    },

    {
        title: "Foreign Trade Database",
        source: "Foreign Trade Database | Office des changes - oc.gov.ma (no date). Available at: https://www.oc.gov.ma/en/e-services/foreign-trade-database (Accessed: February 22, 2023).",
        link: "https://www.oc.gov.ma/en/e-services/foreign-trade-database",
        type: "Databases",
    },

    {
        title: "Institutional website of the High Commission for Planning of the Kingdom of Morocco ",
        source: "Institutional website of the High Commission for Planning of the Kingdom of Morocco (no date) Site institutionnel du Haut-Commissariat au Plan du Royaume du Maroc. Available at: https://www.hcp.ma/ (Accessed: February 24, 2023).",
        link: "https://www.hcp.ma/",
        type: "Databases",
    },

    {
        title: "Modeling simulation & Data analysis, UM6P",
        source: "Modeling simulation & Data analysis, Mohammed VI Polytechnic University (no date) MSDA. Available at: https://msda.um6p.ma/msda_datasets (Accessed: February 26, 2023).",
        link: "https://msda.um6p.ma/msda_datasets",
        type: "Databases",
    },

    {
        title: "United Nations Data",
        source: "Undata | United nation datasets with moroccan records ranked by number of records (no date) United Nations. United Nations. Available at: http://data.un.org/Search.aspx?q=morocco (Accessed: February 27, 2023).",
        link: "http://data.un.org/Search.aspx?q=morocco",
        type: "Databases",
    },

    {
        title: "Morocco's data: 1005 indicators for Morocco",
        source: "Morocco's data: 1005 indicators for Morocco. (note that the data does not originate from this source, for more info on the datasets displayed in this website, check their source) (no date) Our World in Data. Available at: https://ourworldindata.org/country/morocco (Accessed: February 27, 2023).",
        link: "https://ourworldindata.org/country/morocco",
        type: "Databases",
    },

    {
        title: "Humanitarian Data Exchange",
        source: "Morocco - Humanitarian Data Exchange (no date) Humanitarian Data Exchange. Available at: https://data.humdata.org/group/mar (Accessed: March 27, 2023).",
        link: "https://data.humdata.org/group/mar",
        type: "Databases",
    },

    {
        title: "World bank data for Morocco",
        source: "World bank data for Morocco; (no date) Data. Available at: https://data.worldbank.org/country/MA (Accessed: February 25, 2023).",
        link: "https://data.worldbank.org/country/MA",
        type: "Dataset",
    },

    {
        title: "United Nations",
        source: "United Nations | Data Portal, Morocco's population data (no date) United Nations. United Nations. Available at: https://population.un.org/dataportal/ (Accessed: February 27, 2023).",
        link: "https://population.un.org/dataportal/",
        type: "Dataset",
    },

    {
        title: "Ministry of Economy and Finance",
        source: "Morocco's IMF DSBB: International Monetary Fund’s (IMF) Dissemination Standards Bulletin Board (DSBB) | Ministry of Economy and Finance - MEF - Kingdom of Morocco (Last updated on February 28th, 2023) finances.gov.ma. Available at: https://www.finances.gov.ma/en/Pages/home.aspx (Accessed: March 1, 2023).",
        link: "https://www.finances.gov.ma/en/Pages/home.aspx",
        type: "Dataset",
    },

    {
        title: "Digital 2022: Morocco",
        source: "Kemp, S. (2022) Digital 2022: Morocco - DataReportal – Global Digital Insights, DataReportal. DataReportal – Global Digital Insights. Available at: https://datareportal.com/reports/digital-2022-morocco (Accessed: March 27, 2023).",
        link: "https://datareportal.com/reports/digital-2022-morocco",
        type: "Website/article",
    },
];

export default function DataTable() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-white">
                        Data
                    </h1>
                    <p className="mt-2 text-sm text-white">
                        A list of all the databases, datasets, useful websites
                        and (soon) suggestions of webscraping/text-mining
                        projects about Morocco.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <a
                        href="https://github.com/milas-melt/Moroccan-Databases"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Contribute
                    </a>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Link
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Source
                                        </th>
                                        {/* <th
                                            scope="col"
                                            className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                        >
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {data.map((person, key) => (
                                        <tr key={key}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.title}
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 underline">
                                                <a href={person.link}>
                                                    {person.link}
                                                </a>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {person.type}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {person.source}
                                            </td>
                                            {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a
                                                    href="#"
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                    <span className="sr-only">
                                                        , {person.name}
                                                    </span>
                                                </a>
                                            </td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
