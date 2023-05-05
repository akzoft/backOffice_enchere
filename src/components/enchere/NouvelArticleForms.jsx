import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from 'react'
import { CategoriesArticle } from '../../libs';

const NouvelArticleForms = ({ files, setFiles }) => {
    const [showModal, setShowModal] = useState(false)
    const [index, setIndex] = useState()
    const [categories, setCategories] = useState([]);

    const handleFileInputChange = (e) => {

        if (files?.length > 5) {
            alert("max fichiers 5.");
        } else {
            setFiles([...files, ...e.target.files]);
        }
    };

    const removeFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
        setShowModal(false)
    };

    const replaceFile = (index, e) => {
        const updatedFiles = [...files];
        updatedFiles[index] = e.target.files[0];
        setFiles(updatedFiles);
        setShowModal(false)
    };

    const handleOpenModal = (i) => {
        setShowModal(true)
        setIndex(i)
    }


    const onSelect = (selectedList) => {
        ;
    }

    function onRemove(selectedList,) {
        setCategories(selectedList);
    }

    console.log(categories)

    return (
        <form encType="multipart/form-data" className='nouvel-article'>
            <strong>Informations sur l'article</strong>

            <div className="image-container">
                <label htmlFor='file' className="upload-box">
                    <div className="upload-content">
                        <i className="ti ti-upload"></i>
                        <span>Uploader des fichiers (max: 5 fichiers)</span>
                    </div>
                </label>
                <div className="upload-items">
                    {files?.length > 0 && <img key={files[0]?.name} src={URL.createObjectURL(files[0])} alt={files[0]?.name} onClick={() => handleOpenModal(0)} />}
                    <div className="autre-images">
                        {files?.length > 1 && files?.slice(1)?.map((file, i) => (
                            <img src={URL.createObjectURL(file)} key={file?.name} alt={file?.name} onClick={() => handleOpenModal(i + 1)} />
                        ))}
                    </div>
                </div>
            </div>
            <input type="file" multiple id='file' onChange={handleFileInputChange} style={{ display: "none" }} />

            <div className="form-container">
                <div className="form-items">
                    <div className="form-item">
                        <label htmlFor="title" className='label'>Titre article <span className='required'>*</span></label>
                        <input type="text" className='input' />
                    </div>


                    <div className="form-item">
                        <label htmlFor="title" className='label'>Catégories article <span className='required'>*</span></label>
                        <Multiselect
                            options={CategoriesArticle}
                            selectedValues={categories}
                            onSelect={(selectedList) => setCategories(selectedList)}
                            onRemove={(selectedList) => setCategories(selectedList)}
                            displayValue="name"
                            closeOnSelect={true}
                            selectionLimit={3}
                            placeholder="Selectionner au plus 3 catégories"
                            style={{ border: "none" }}
                            customArrow={<i className='ti ti-close' />}
                            showArrow={true}
                        />
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

            {showModal && <div className="modal">
                <span className='btn' onClick={(e) => removeFile(index)}>Supprimer</span>
                <input type="file" onChange={(e) => replaceFile(index, e)} name='Remplacer' />
            </div>
            }
        </form>
    )
}

export default NouvelArticleForms