/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Index() {
  return (
    <div className={'min-h-screen  bg-sky-900 px-16 py-8 text-sky-100'}>
      <div className={'space-y-6'}>
        <div className={'space-y-1'}>
          <h1 className={'font-white mb-3 text-3xl font-semibold'}>
            Wak'Utility
          </h1>
          <p>
            Bienvenue sur mon application, elle est encore en phase de
            développement, des bugs peuvent subsister et de nombreuses
            modifications sont à venir.
          </p>
          <p>
            Vous pouvez passer sur le reste de l'application via les boutons
            ci-dessus
          </p>
        </div>

        <div className={'space-y-1'}>
          <p>
            À l'heure actuelle vous ne trouverez qu'un outil de gestion des
            taches régulières sur wakfu, mais je compte ajouter de nouvelles
            fonctionnalités dans un futur plus ou moins proche
          </p>
          <p>
            Si vous voulez signaler un bug ou que vous avez des
            suggestions/propositions, que ce soit pour de nouvelles
            fonctionnalités ou de nouvelles donnés je suis disponible sur
            discord :{' '}
            <span
              className={
                'inline-flex items-center rounded bg-sky-800 px-1.5 py-0.5'
              }
            >
              Khoéos#9117
            </span>
            , vous pourrez facilement me trouver depuis le discord wakfu
          </p>
          <p>
            Le code source sera bientôt disponible sur github, si jamais vous
            voulez donner un coup de main et proposer des améliorations
          </p>
        </div>
      </div>

      <div className={'mt-4'}>
        <h2 className={'font-gray-100 mb-2 text-2xl font-semibold'}>Todo :</h2>
        <ul className={'flex flex-col gap-2 md:grid md:grid-cols-3'}>
          <li>- Catégories personalisées</li>
          <li>- Ajouter des taches par défaut</li>
          <li>- Ajout du bonus de l'almanax</li>
          <li>- Ajout du nom du boss mod'ule</li>
          <li>- Ajout d'une zone de note</li>
          <li>- Personalisation des couleurs</li>
          <li>- Liaison à une base de donnée</li>
          <li>- Partage de taches</li>
          <li>- Optimisation de l'application</li>
          <li className={'col-span-3'}>
            - Ajouter plein de fonctionnalités (les idées viendrons ! Mais je
            compte sur les utilisateurs !)
          </li>
        </ul>
      </div>

      <div className={'mt-16 text-sky-200'}>
        <p>
          Comme indiqué en bannière lors de votre première visite, la version
          actulle n'a pas de base de donnée propre, toute les données sont
          stockées directement dans votre navigateur.
        </p>
        <p>
          Vous pouvez donc perdre vos personalisation en cas de supression de
          votre stockage local qui peut subvenir. Je ne peux vous conseiller que
          de pas mettre votre vie dans les taches personnalisées pour éviter de
          devoir tout refaire dans un futur +/- proche
        </p>
      </div>

      <button
        className={
          'inline-flex items-center rounded border border-transparent bg-sky-700 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-sky-800'
        }
        onClick={() =>
          window.confirm(
            'Voulez vous suprimmer les données enregistrées ? \nRechargez la page pour voir les modifications'
          )
            ? localStorage.clear()
            : null
        }
      >
        Réinitialiser manuellement les données
      </button>
    </div>
  )
}
