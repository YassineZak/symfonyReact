<?php

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\ParimisAvis;

class AvisType extends AbstractType

{
    /**
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('pseudo', TextType::class)
        ->add('note', NumberType::class)
        ->add('avisTitre', TextType::class)
        ->add('commentaire', TextareaType::class)
        ->add('save', SubmitType::class, ['label' => 'Soumettre note']);
    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'App\Entity\ParimisAvis',
        ]);
    }
    public function getName()
    {
        return 'avis_post';
    }

}