import { useState } from "react"
import FilterTabs from "./FilterTabs"



type Employee = {
    name: string,
    role: "sales" | "hr" | "tech"
}

export const FilterTabsDemo = () => {

    const employees: Employee[] = [
        {
            name: "John",
            role: "sales"
        },
        {
            name: "Jane",
            role: "hr"
        },
        {
            name: "Bob",
            role: "tech"
        },
        {
            name: "Alice",
            role: "sales"
        },
        {
            name: "Eve",
            role: "hr"
        },
        {
            name: "Charlie",
            role: "tech"
        }
    ]

    const [ selectedRole, setSelectedRole ] = useState<"sales" | "hr" | "tech">("hr");

    const onSelectTab = (selected: "sales" | "hr" | "tech") => {
        setSelectedRole(selected);
    }

    return <div>
        <FilterTabs onChange={onSelectTab}>
            <FilterTabs.Tab value={"sales"}>Försäljning</FilterTabs.Tab>
            <FilterTabs.Tab value={"hr"}>Personal</FilterTabs.Tab>
            <FilterTabs.Tab value={"tech"}>Teknik</FilterTabs.Tab>
        </FilterTabs>

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.filter(employee => employee.role === selectedRole).map((employee, index) => <tr key={index} className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {employee.name}
                        </th>
                    </tr>)}
                </tbody>
            </table>
        </div>

    </div>


}