import React from 'react'

const EditArticleForms = () => {
    return (
        <div className='nouvel-article'>
            <strong>Informations sur l'article</strong>

            <div className="image-container">
                <div className="upload-box">
                    <div className="upload-content">
                        <i className="ti ti-upload"></i>
                        <span>Uploader des fichiers (max: 5 fichiers)</span>
                    </div>
                </div>
                <div className="upload-items">
                    <img src="assets/avatar.png" alt="" />
                    <div className="autre-images">
                        <img src="assets/avatar.png" alt="" />
                        <img src="assets/avatar.png" alt="" />
                        <img src="assets/avatar.png" alt="" />
                        <img src="assets/avatar.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="form-container">
                <div className="form-items">
                    <div className="form-item">
                        <label htmlFor="title" className='label'>Titre article <span className='required'>*</span></label>
                        <input type="text" className='input' />
                    </div>


                    <div className="form-item">
                        <label htmlFor="title" className='label'>Catégories article <span className='required'>*</span></label>
                        <select className='input' >
                            <option value={""}>Choisir au moins une categorie</option>
                            <option value={"public"}>Electronique</option>
                            <option value={"private"}>Immobilier</option>
                        </select>
                    </div>
                </div>

                <div className="form-items">
                    <div className="form-item">
                        <label htmlFor="title" className='label'>Description <span className='required'>*</span></label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>


                <div className='separator' />
                <strong >Informations sur l'enchère</strong>

                <div className="form-items">
                    <div className="form-item">
                        <label htmlFor="title" className='label'>Prix de depart <span className='required'>*</span></label>
                        <input type="text" className='input' />
                    </div>


                    <div className="form-item">
                        <label htmlFor="title" className='label'>Prix de reservation <span className='required'>*</span></label>
                        <input type="text" className='input' />
                    </div>

                    <div className="form-item">
                        <label htmlFor="title" className='label'>Montant d'incrementation <span className='required'>*</span></label>
                        <input type="text" className='input' />
                    </div>
                </div>

                <div className='separator' />
                <strong>Parametrage de l'enchère</strong>



                <div className="form-items">
                    <div className="form-item">
                        <label htmlFor="title" className='label'>Delai de fin de l'enchère <span className='required'>*</span></label>
                        <input type="text" className='input' />
                    </div>


                    <div className="form-item">
                        <label htmlFor="title" className='label'>Type d'enchère <span className='required'>*</span></label>
                        <select className='input' >
                            <option value={""}>Choisir un type d'enchère</option>
                            <option value={"public"}>Publique</option>
                            <option value={"private"}>Privée</option>
                        </select>
                    </div>
                </div>

                <div className='separator' />
                <span style={{ marginBottom: "10px" }}>Options de livraison <span className='required'>*</span></span>
                <div className="form-items">
                    <div className='options-livraison'>
                        <div className='livraison-item'>
                            <label htmlFor="teliman">Teliman</label>
                            <input type="checkbox" name="" id="teliman" />
                        </div>

                        <div className='livraison-item'>
                            <label htmlFor="own">A main propre</label>
                            <input type="checkbox" name="" id="own" />
                        </div>

                        <div className='livraison-item'>
                            <label htmlFor="cost">Avec frais</label>
                            <input type="checkbox" name="" id="cost" />
                        </div>
                    </div>

                    <div className="form-item">
                        <input type="text" className='input' placeholder='Prix de livraison' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditArticleForms