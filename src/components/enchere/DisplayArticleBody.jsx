import { Link, useParams } from "react-router-dom"
import { ExpirationVerify, api_public, get_enchere } from "../../libs"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import parse from "html-react-parser";




const DisplayArticleBody = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { host, users } = useSelector(state => state?.user)
    const { enchere } = useSelector(state => state?.enchere)
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        dispatch(get_enchere({ id, hostID: host?._id }))
    }, [dispatch, host, id])


    const swapImages = (index) => {
        const tempImage = enchere?.medias[currentImage];
        const newImages = [...enchere?.medias];
        newImages[currentImage] = newImages[index];
        newImages[index] = tempImage;
        setCurrentImage(index);
    }

    return (
        <div className="article_details">
            <div className="main_content">
                <div className="article_details_left">
                    <div className="image_container">
                        <Link target="_blank" to={api_public + "/images/" + enchere?.medias[currentImage]} className="main_image">
                            <img src={api_public + "/images/" + enchere?.medias[currentImage]} alt="" />
                        </Link>

                        <div className="other_images">
                            {enchere?.medias?.length > 1 && enchere?.medias?.slice(1)?.map((pic, i) => (
                                <img
                                    src={api_public + "/images/" + pic}
                                    alt=""
                                    key={i}
                                    onClick={() => swapImages(i + 1)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="article_details_right">
                    <strong style={{ fontSize: "24px", letterSpacing: "1px", fontWeight: "300" }}>{enchere?.title}</strong>

                    <div style={{ fontSize: "12px" }}>Categories: [{enchere?.categories?.map((categorie, i) => (<strong key={i} style={{ fontSize: "10px", color: "brown", textDecoration: "none" }}>{categorie},</strong>))}]</div>


                    <div className="display_item">
                        <div className="item">
                            <div >Prix initial</div>
                            <div style={{ textAlign: "center" }}>  <strong>{enchere?.started_price} FCFA</strong></div>
                        </div>

                        <div className="item">
                            <div style={{ textAlign: "center" }}>Prix de reservation</div>
                            <div style={{ textAlign: "center" }}><strong>{enchere?.reserve_price} FCFA</strong></div>
                        </div>
                    </div>

                    <div className="display_item">
                        <div className="item" style={{ alignItems: "center", justifyContent: "center" }}>
                            <div style={{ textAlign: "center" }}>Montant d'incrementation</div>
                            <div ><strong>{enchere?.reserve_price} FCFA</strong></div>
                        </div>
                    </div>



                    {enchere?.history?.length > 0 && <div>Montant enchere actuel</div>}
                    {enchere?.history?.length > 0 && <div><strong>{enchere?.history[enchere?.history?.length - 1]?.montant} FCFA</strong></div>}

                    <div className="display_item">
                        <div className="item">
                            <div>Status</div>
                            <strong>{enchere?.enchere_status === "pending" ? "En attente de confirmation" : ExpirationVerify(enchere?.expiration_time) ? "Expiration" : enchere?.enchere_status === "rejected" ? "Article rejeté" : "Publié"}</strong>
                        </div>

                        <div className="item">
                            <div>Option de livraison</div>
                            <strong>{enchere?.delivery_options?.teliman ? "teliman" : (enchere?.delivery_options?.own && enchere?.delivery_options?.cost) ? enchere?.delivery_options?.deliveryPrice + " FCFA" : "Gratuite"}</strong>

                        </div>
                    </div>


                    <div className="display_item">
                        <div>Type d'enchere: <strong>{enchere?.enchere_type}</strong></div>
                    </div>


                    <div className="display_item" style={{ justifyContent: "flex-end", width: "100%" }}>
                        <div className="item" style={{ justifyContent: "flex-end" }} >
                            <div>Delai d'expiration de l'enchere</div>
                            <div style={{ display: "flex", justifyContent: "flex-end" }} >  <Countdown date={new Date(enchere?.expiration_time)} renderer={renderer}></Countdown></div>
                        </div>
                    </div>

                    <div className="display_item">
                        <div className="item">
                            <div>Propriétaire</div>
                            {users?.map(user => (enchere?.sellerID === user?._id) && <strong key={enchere?.sellerID} >{user?.facebook?.first_name || user?.phone}</strong>)}
                        </div>

                        {enchere?.town && <div className="item">
                            <div>Localisation</div>
                            {users?.map(user => (enchere?.sellerID === user?._id) && <strong key={enchere?.sellerID} >{user?.town}</strong>)}
                        </div>}
                    </div>
                </div>

            </div>

            <div style={{ marginTop: "15px", textAlign: "center", background: "brown", color: "White" }}>Souhaitez-vous editer cet articles? <Link to={"/articles/edition-article/" + id} style={{ color: "tomato" }}>OUI</Link></div>

            <div className="description">
                <div className="item">
                    <div>Description</div>
                    <strong style={{ textAlign: "justify" }}>{parse(`${enchere?.description}`)}</strong>
                </div>
            </div>

        </div>
    )
}
export default DisplayArticleBody




const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Le compte à rebours est terminé
        return <span>Expiré!</span>;
    } else {
        // Afficher les labels pour chaque élément
        return (
            <div style={{ display: 'flex', alignItems: 'center', fontSize: "14px", gap: "2px" }}>
                <div style={{ background: "black", color: "white", borderRadius: "5px", width: "40px", height: "40px", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>{days}</div>
                    <div style={{ fontSize: "8px", textAlign: "center" }}>Jours</div>
                </div>
                <div style={{ background: "black", color: "white", borderRadius: "5px", width: "40px", height: "40px", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>{hours}</div>
                    <div style={{ fontSize: "8px", textAlign: "center" }}>Heures</div>
                </div>
                <div style={{ background: "black", color: "white", borderRadius: "5px", width: "40px", height: "40px", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>{minutes}</div>
                    <div style={{ fontSize: "8px", textAlign: "center" }}>Minutes</div>
                </div>
                <div style={{ background: "black", color: "white", borderRadius: "5px", width: "40px", height: "40px", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>{seconds}</div>
                    <div style={{ fontSize: "8px", textAlign: "center" }}>Secondes</div>
                </div>
            </div>
        );
    }
};
