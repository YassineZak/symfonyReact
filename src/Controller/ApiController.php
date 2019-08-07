<?php 
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Carousel;
use App\Entity\WidgetBlock;
use Symfony\Component\Serializer\Serializer;


class ApiController extends AbstractController {

    /**
     * @Route("/api/carousel", name="carousel")
     */
    public function getCarouselResourcesAction(){
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

    /**
     * @Route("/api/widgetblock", name="widgetblock")
     */
    public function getWidgetBlockResourcesAction(){
        $repository = $this->getDoctrine()->getRepository(WidgetBlock::class);
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