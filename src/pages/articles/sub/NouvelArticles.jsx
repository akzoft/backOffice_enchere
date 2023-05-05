import React, { useState } from 'react'
import { Card } from '../../../components'
import { PageTabs, PageTitle } from '../../../components/commons'
import { NouvelArticleForms } from '../../../libs'

const NouvelArticles = () => {
    const [files, setFiles] = useState([])
    console.log(files)

    const handleSave = (e) => {
        alert("ok")
    }


    return (
        <div className='nouvel-article'>
            <Card>
                <PageTitle title={"Ajouter un nouvel article"} linked={false} hideExporte={true} buttonText={"Enregistrer"} handleSave={handleSave} />
                <PageTabs />
                <NouvelArticleForms files={files} setFiles={setFiles} />
                <PageTitle hideTitle={true} title={""} linked={false} hideExporte={true} buttonText={"Enregistrer"} handleSave={handleSave} />
            </Card>
        </div>
    )
}

export default NouvelArticles