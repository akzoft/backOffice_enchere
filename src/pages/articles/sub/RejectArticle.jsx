import { useParams } from "react-router-dom";
import { Card, DisplayArticleBody, RejectMotifs } from "../../../components";
import { PageTabs, PageTitle } from "../../../components/commons";
import { useDispatch, useSelector } from "react-redux";
import { get_enchere, update_enchere_actions } from "../../../libs";
import { useEffect, useState } from "react";

const RejectArticle = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { host } = useSelector(state => state?.user)
    const { enchere } = useSelector(state => state?.enchere)
    const [check, setCheck] = useState({ title: false, description: false, categories: false, started_price: false, increase_price: false, medias: false, reserve_price: false })
    const [msg, setMsg] = useState({ title: "", description: "", categories: "", started_price: "", increase_price: "", medias: "", reserve_price: "" })
    const [_msg, set_msg] = useState({ title: false, description: false, categories: false, started_price: false, increase_price: false, medias: false, reserve_price: false })


    useEffect(() => {
        dispatch(get_enchere({ id, hostID: host?._id }))
    }, [dispatch, id, host])

    useEffect(() => {
        setCheck({ title: enchere?.reject_motif?.title, description: enchere?.reject_motif?.description, categories: enchere?.reject_motif?.categories, started_price: enchere?.reject_motif?.started_price, increase_price: enchere?.reject_motif?.increase_price, medias: enchere?.reject_motif?.medias, reserve_price: enchere?.reject_motif?.reserve_price })
    }, [enchere])


    const message = {
        title: "Le titre de votre article n'est pas conforme à la politique de l'application",
        description: "Le titre de votre article n'est pas conforme à la politique de l'application",
        medias: "Certain(s) de vos medias contiennent des contenues illicites",
        started_price: "Le prix de votre article n'est pas correct",
        reserve_price: "Le prix de reservation de votre article n'est pas correct",
        increase_price: "Le prix de reservation de votre article n'est pas correct",
        categories: "Problèmes liés aux choix de categorie",
    }

    const handleSave = () => {
        const datas = {
            reject_motif: {
                title: { message: _msg?.title ? msg.title : check.title ? message.title : "" },
                description: { message: _msg?.description ? msg.description : check.description ? message.description : "" },
                medias: { message: _msg?.medias ? msg.medias : message.medias },
                started_price: { message: _msg?.started_price ? msg.started_price : check.started_price ? message.started_price : "" },
                reserve_price: { message: _msg?.reserve_price ? msg.reserve_price : check.reserve_price ? message.reserve_price : "" },
                increase_price: { message: _msg?.increase_price ? msg.increase_price : check.increase_price ? message.increase_price : "" },
                categories: { message: _msg?.categories ? msg.categories : check.categories ? message.categories : "" },
            },
            enchere_status: "rejected",
            id, hostID: host?._id
        }

        dispatch(update_enchere_actions(datas));
    }
    console.log(check)

    return (
        <div className='display-article'>

            <Card>
                <PageTitle title={"Motifs de rejet"} buttonText={"Rejeter maintenant"} linked={false} hideExporte={true} handleSave={handleSave} />
                <PageTabs />
                <RejectMotifs _msg={_msg} set_msg={set_msg} msg={msg} setMsg={setMsg} enchere={enchere} check={check} setCheck={setCheck} message={message} />
            </Card>

            <Card>
                <PageTitle title={"Details de l'article"} hideBtns={true} linked={false} hideExporte={true} link={""} />
                <PageTabs />
                <DisplayArticleBody />
            </Card>


        </div>
    )
}

export default RejectArticle;