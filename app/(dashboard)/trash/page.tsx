import React from 'react'
import Page from '@/components/layout/Page'
// import PageHeader from '@/components/layout/PageHeader'
import TrashHeader from '@/components/trash/TrashHeader'
import TrashRow from '@/components/trash/TrashRow'
import TrashTable from '@/components/trash/TrashTable'
import TrashToolbar from '@/components/trash/TrashToolbar'

function Trash() {
  return (
          <Page>
      <TrashHeader />
      <TrashToolbar />
      <TrashTable />
    </Page>
  )
}

export default Trash