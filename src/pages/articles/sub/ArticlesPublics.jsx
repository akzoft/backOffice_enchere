import React from 'react'
import { Card, PageTableHeader } from '../../../components'
import { PageTabs, PageTitle, Table } from '../../../components/commons'

const ArticlesPublics = () => {
    return (
        <div>
            <Card>
                <PageTitle />
                <PageTabs />
                <PageTableHeader />
                <Table />
            </Card>
        </div>
    )
}

export default ArticlesPublics