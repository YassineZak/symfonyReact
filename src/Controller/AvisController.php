<?php
namespace App\Controller;

use App\Entity\ParimisAvis;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use App\Form\Type\AvisType;

/**
 * @Route("/api/avis", name="avis")
 */
class AvisController extends FOSRestController
{   
    /**
     * @Rest\Get("/api/avis")
     */
    public function getAvisAction(){
        $repository=$this->getDoctrine()->getRepository(ParimisAvis::class);
        $avis = $repository->findAll();
        return View::create($avis, Response::HTTP_OK);

    }


    /**
     * @Rest\Post("api/avis/post")
     * @return Response
     */
    public function postAction(Request $request)
    {
        
        $avis = new ParimisAvis();

        $form = $this->createForm(AvisType::class, null, [
            'csrf_protection' => false,
        ]);
        $avisPost = $form->getData();
        $em = $this->getDoctrine()->getManager();
        $em->persist($avisPost);
        $em->flush();
        return $this->handleView($this->view(['status'=>'ok'],Response::HTTP_CREATED));
        

    }
}
