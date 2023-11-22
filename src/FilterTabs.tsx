import React, { useEffect, useState } from "react";

type FilterTabsProps<T> = {
    onChange: (selected: T) => void;
    children: JSX.Element[]
}

type InternalTab = {
    onClick: () => void;
    index: number;
    label: string;
}

const FilterTabs = <T extends unknown>({ onChange, children }: FilterTabsProps<T>) => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabs, setTabs] = useState<InternalTab[]>([]);

    const selectTab = (index: number, value: T) => {
        setActiveTabIndex(index);
        onChange(value);
    }

    useEffect(() => {
        setTabs(
            children.map((tabElement, index) => {
                const props = tabElement.props;
                return {
                    onClick: () => selectTab(index, props.value),
                    index,
                    label: props.children
                }
            })
        )
    }, [])

    return <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">{
            tabs.map(({ onClick, index, label}) => activeTabIndex === index ? renderActiveTab(label, onClick) : renderDefaultTab(label, onClick))
        }
        </ul></div>
}

type TabProps<T> = {
    value: T,
    children: string;
}

const renderDefaultTab = (label: string, onClick: () => void ) => (
    <li className="me-2">
        <span onClick={onClick} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">{label}</span>
    </li>
)

const renderActiveTab = (label: string, onClick: () => void ) => (
    <li className="me-2">
        <span onClick={onClick} className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">{label}</span>
    </li>
)


const Tab = ({ value, children }: TabProps) => <></>

FilterTabs.Tab = Tab;

export default FilterTabs;