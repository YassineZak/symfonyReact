<?php
namespace App\Controller\Rest;

use App\Entity\ParimisAvis;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use App\Form\Type\AvisType;
use FOS\RestBundle\View\View;

class AvisController extends FOSRestController
{   
    
    /**
     * @Rest\Post("/avis/post")
     * @param Request $request
     * @return View
     */
    public function postAction(Request $request)
    {
        
        $avis = new ParimisAvis();
        $form = $this->createForm(AvisType::class, null, [
            'csrf_protection' => false,
        ]);
        $avisPost = $form->getData();
        $avis->setPseudo($request->get('pseudo'));
        $avis->setNote($request->get('note'));
        $avis->setAvisTitre($request->get('avisTitre'));
        $avis->setCommentaire($request->get('commentaire'));
        $em = $this->getDoctrine()->getManager();
        $em->persist($avis);
        $em->flush();
        return View::create($avis, Response::HTTP_CREATED);
        
    }

    /**
     * @Rest\Get("avis")
     */
    public function getAllAvis(Request $request){
        $repository = $this->getDoctrine()->getRepository(ParimisAvis::class);
        $avis = $repository->findAll();
        return View::create($avis, Response::HTTP_OK);
    }
}
