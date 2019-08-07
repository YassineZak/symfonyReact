<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\WidgetBlockRepository")
 * @Vich\Uploadable
 */
class WidgetBlock
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $blockTitle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $linkTitle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $linkUrl;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $img;
    /**
     * @Vich\UploadableField(mapping="images", fileNameProperty="img")
     * @var File
     */
    private $imgFile;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBlockTitle(): ?string
    {
        return $this->blockTitle;
    }

    public function setBlockTitle(string $blockTitle): self
    {
        $this->blockTitle = $blockTitle;

        return $this;
    }

    public function getLinkTitle(): ?string
    {
        return $this->linkTitle;
    }

    public function setLinkTitle(string $linkTitle): self
    {
        $this->linkTitle = $linkTitle;

        return $this;
    }

    public function getLinkUrl(): ?string
    {
        return $this->linkUrl;
    }

    public function setLinkUrl(string $linkUrl): self
    {
        $this->linkUrl = $linkUrl;

        return $this;
    }


    public function setImgFile(File $img = null)
    {
        $this->imgFile = $img;
        if ($img) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }

    }

    public function getImgFile()
    {
        return $this->imgFile;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): self
    {
        $this->img = $img;

        return $this;
    }
}
