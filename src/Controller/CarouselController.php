<?php 
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Carousel;
use Symfony\Component\Serializer\Serializer;


class CarouselController extends AbstractController {

    /**
     * @Route("/api/carousel", name="carousel")
     */
    public function getRessourcesAction(){
        $repository = $this->getDoctrine()->getRepository(Carousel::class);
        $datas= $products = $repository->findAll();
        $serializer = $this->container->get('serializer');
        $collection = array();
        foreach ($datas as $data){
            $data = $serializer->normalize($data);
            array_push($collection,$data);
        }
        return new JsonResponse($collection);
    }
}