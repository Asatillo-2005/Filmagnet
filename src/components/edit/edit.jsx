import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

import "./edit.scss"
import edit1 from "../../assets/svg/movie-watch.svg"

import { useEffect, useState, useRef } from "react"
import Modal from '../modal/modal.jsx';

function Edit() {

    const [modal, setModal] = useState()

    const [getdata, setGetdata] = useState([])

    useEffect(() => {
        fetch('https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie')
            .then((res) => res.json())
            .then((data) => setGetdata(data))
    }, [])

    console.log(getdata);

    const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        }
    ];



    return (
        <section className="section-modal">
            <div className="contaner">
                <div className="salom">
                    {
                        getdata?.map((item, index) => {
                            return (
                                <div className="modal-link">
                                    <div className="modal-toast">
                                        <Toast ref={toast} />
                                        <SpeedDial model={items} direction="down" style={{ left: 'calc(50% - 2rem)', top: 35, right: -120 }} />
                                    </div>
                                    <img src={item.img} alt="error" width={"294.977px"} height={"391.691px"} />
                                    <div className="movie-about">
                                        <div className="movie-about-year-name">
                                            <span className="movei-about-name">{item.name}</span>
                                            <span className="movie-about-year">{item.year}</span>
                                        </div>
                                        <div className="movei-about-quality-time">
                                            <span className="movei-about-quality">{item.quality}</span>
                                            <span className="movie-about-time"> <img src={edit1} alt="error" />{item.time}min</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Modal a={modal} b={setModal} />
                </div>
            </div>
        </section>
    )
}

export default Edit