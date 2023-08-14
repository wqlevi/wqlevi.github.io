---
layout: default
title: Gradient flow
parent: Blogs
nav_order: 2
---
# Gradient flow

### Prelimiaries

**Flux:** The amount of mass ($q$) pass through a unit area per unit time ($kg/m^2/s$). Or informally, it’s a product of density of the fluid times a n-D vector of velocity on a topological surface:

$$
\vec{j} = \rho \vec{u}
$$

$\text{where }\vec{u}\text{ is the velocity field.}$

**Continuity equation:** the transport process of mass of conserved material.

$$
\frac{\partial{\rho}}{\partial{t}} + \nabla \vec{j} = \sigma
, 
$$

$$
\text{where density, divergence, flux and generation of mass is noted as } \rho, \nabla, \vec{j}, \text{ and }   \sigma.
$$

### Probability perspective

*As an analogy to mass conservation in physics world, probability mass is also considered conservative when being mapped from one to another.*

**Evolution of pdf.** Here, the overall probability mass of a moving distribution ($\mathbb{Q}$) is mapped to the target distribution ($\mathbb{P}$). The probability density, $q_{t}(x)$,  is analogous to the density of mass which evolves overtime ($\{q_{t}\}\text{, }t\in \mathbb{R}^{+}$), and finally mapped to anothre probability density ($p$). 

**Metrics space.** Unlike the cartisian coordinates in physics space, the “flux” in the measurement context refers to: 

$$
\begin{split}-\text{flux}&=-\nabla f(x_{t})\\&=\text{div}(q_{t}\nabla_{metircs}\mathcal{F}(q_{t}))\\&=\text{div}(q_{t}\nabla_{x}\frac{\partial{\mathcal{F(q_{t})}}}{\partial{q_{t}}})
\end{split}
$$

$\text{where the last equation can be seen as the gradient of the measurement }\mathcal{F(\cdot)}\text{ on Wasserstein space}$

### Deep learning persepctive (gradient descent)
