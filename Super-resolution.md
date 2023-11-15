---
layout: default
title: Super resolution on MRI
parent: Blogs
nav_order: 2
---
# Super resolution using GAN
_This project is mainly about deploying GAN for generating high fedility MRI images_

The result of SR could be extend for consequent applications, e.g. data augmentation for segmentation models, and these result were shown in [OHBM2022](https://pure.mpg.de/rest/items/item_3505648_2/component/file_3505649/content) and [MIDL2022](https://openreview.net/pdf?id=EFiFV2MSNEB).


In my opinion, SR task should be distinguished from other geenrative tasks (e.g. style transfer, cross-modality generation etc.), thus I personally prefer to redeem a SR task as restoring HR image from a LR conterpart with minimum pereceptual loss (i.e. indistinguishable for human perception). While many models fails to this point, SwinIR or DDPM treat SR as a way of matching the probability distribution of HR and SR images, which overlooks the local details that are mostly approximated via the intrinsic inductive bias of the convolutional layers.

<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=exp_DX4m2PBkWNOD0Mp_OpztaeIooy4Ym1bd_FxHg4w&cl=ffffff&w=a"></script>

[![Hits](https://hits.sh/www.wqlevi.tk/Projects.html.svg)](https://hits.sh/www.wqlevi.tk/Projects.html/)
