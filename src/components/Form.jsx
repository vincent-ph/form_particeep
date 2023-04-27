import React from 'react';
import { useState } from "react";
import ProgressBar from './ProgressBar'; // Composant de la barre de progression
import PhoneInput from 'react-phone-number-input'; // Composant pour la saisie de téléphone
import 'react-phone-number-input/style.css'; 
import logo_cloud from '../assets/logo_cloud.png'; // Logo de la zone de dépôt


const Form = () => {
  // Gestion de nb pages
  const currentPage = 1;
  const totalPage = 16;
  const progress = (currentPage / totalPage) * 100;
  // Etat pour les saisie de valeurs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [answer, setAnswer] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => { // Gestion de la validation du formulaire
    e.preventDefault();
    // Affichage des valeurs dans la console une fois validées
    console.log('Prénom:', firstName);
    console.log('Nom:', lastName);
    console.log('Adresse:', address);
    console.log('Date de naissance:', birthday);
    console.log('Réponse:', answer);
    console.log('Email:', email);
  };
  
  return (
    <div className='form-component'>
      {/* Appel du composant de barre de suivi */}
      <ProgressBar progress={progress} />
      <div className='counter-container'>
        <p>
           {currentPage}/{totalPage} {/*Affchage numéro de page actuelle */}
        </p>
      </div>
      <h3>Vos informations</h3>
      <div className="form-container">
        {/* Formulaire avec validation*/}
        <form onSubmit={handleSubmit}>  
          <label htmlFor="firstName">PRÉNOM *</label> {/* Etiquette du champs de saisie*/}
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Gestion des données entrées dans le champs
            placeholder="Donnez votre réponse ici"
            required
          />

          <label htmlFor="lastName">NOM *</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Donnez votre réponse ici"
            required
          />

          <label htmlFor="address">ADRESSE COMPLÈTE *</label>
          <input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Donnez votre réponse ici"
            required
          />

          <label htmlFor="birthday">DATE DE NAISSANCE *</label>
          <input
            id="birthday"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
            required
          />

          <label htmlFor="phoneNumber">NUMÉRO DE TÉLÉPHONE *</label>
          <PhoneInput
            international
            defaultCountry="FR"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />

          {/* Gestion de la question avec reponse oui ou non */}
          <label htmlFor="answer">QUESTION À CHOIX MULTIPLES *</label>
          <div className='radio'> 
            <label htmlFor="oui">
              <input
                type="radio"
                id="oui"
                name="reponse"
                value="oui"
                checked={answer === 'oui'} // Si la case oui est coché alors answer = oui
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
              Oui
            </label>
          
            <label htmlFor="non">
              <input
                type="radio"
                id="non"
                name="reponse"
                value="non"
                checked={answer === 'non'} // Si la case non est coché alors answer = non
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
              Non
              </label>
          </div>

          <label htmlFor="email">ADRESSE MAIL *</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Donnez votre réponse ici"
            required
          />

          <div className='question'>
            <label htmlFor="add">Voulez-vous recevoir les notifications mail?</label>
            {/* Gestion du bouton toggle switch */}
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>

          <label htmlFor="file">PIÈCE D'IDENTITÉ *</label>
          {/* Gestion de la zone de dépôt de fichier */}
          <div className="dropzone">
            <div className='dropzone-container'>
              <img src={logo_cloud} alt="Image" />
              Glisser votre fichier dans cette zone
            </div>
          </div>

          <hr /> {/* Ligne de séparation */}

          <div className="button-container">
            <button type="submit">Suivant</button>
          </div>
          </form>
      </div>

    </div>
  );
}

export default Form