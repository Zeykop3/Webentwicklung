<!-- JavaScript -->
  <script>
  document.addEventListener('DOMContentLoaded', () => {
  const merkliste = JSON.parse(localStorage.getItem('merkliste')) || [];
  console.log("Merkliste:", merkliste);
  const merklisteContainer = document.getElementById('merkliste');
  const emptyMessage = document.getElementById('empty-message');

    const productsData = {
      // Trockene Haut
      product1: {
        name: "AVENE Cleanance HYDRA Beruhigende Reinigungscreme 200 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/10057892-h1.png"
      },
      product2: {
        name: "Eucerin Sun Creme Sensitive Protect LSF 50+ 50 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/00802461.jpg"
      },
      product3: {
        name: "AVENE Hydrance REICHHALTIG Feuchtigkeitscreme 40 ml",
        image: "https://ixxilon.mauve.de/300/11352564_8.jpg"
      },
      product4: {
        name: "BIODERMA Hydrabio Serum Feuchtigkeitsserum 40 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/9226993.jpg"
      },

      // Normale Haut
      product11: {
        name: "BIODERMA Sensibio Gel Moussant Reinigungsgel 200 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/12346206.jpg"
      },
      product12: {
        name: "LA ROCHE-POSAY Anthelios Invisible Fluid LSF 30, 50 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/0000030157330-La_Roche_Posay-14420817-LA_ROCHE-POSAY_ANTHELIOS_INVISIBLE_FLUID_LSF_30-01-Sonnenfluid_Front.jpg"
      },
      product13: {
        name: "BIODERMA Hydrabio Creme Feuchtigkeitspflege 50 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/csm_Hydrabio_Creme_selbst_freigestellt_e4b93ba356.jpg"
      },
      product14: {
        name: "AVENE DermAbsolu stärkendes Serum 30 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/13905211-h1.jpg"
      },

      // Mischhaut
      product21: {
        name: "AVENE Cleanance Reinigungsgel 400 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/11516474-h1.png"
      },
      product22: {
        name: "AVENE Anti-Aging Sonnenschutz SPF 50+ 50 ml",
        image: "https://ixxilon.mauve.de/300/11479678_8.jpg"
      },
      product23: {
        name: "EUBOS TROCKENE HAUT 5% Urea Gesichtscreme 50 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/03447500_1.jpg"
      },
      product24: {
        name: "BIODERMA Sensibio Mask Beruhigende Maske 75 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/9226898.jpg"
      },

      // Fettige Haut
      product41: {
        name: "BIODERMA Sebium Gel Moussant Reinigungsgel 200 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/9227142.jpg"
      },
      product42: {
        name: "DERMASENCE Solvinea Med LSF 50+ Creme 150 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/12404984.jpg"
      },
      product43: {
        name: "BIODERMA Sebium Hydra Creme Feuchtigkeitspflege 40 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/07395645.jpg"
      },
      product44: {
        name: "AVENE Antirougeurs Calm beruhigende Maske 50 ml",
        image: "https://cocopha.de/documents/products/Detailansicht/11696016.png"
      }
    };

      function updateEmptyMessage() {
        if (merkliste.length === 0) {
          emptyMessage.style.display = 'block';
          merklisteContainer.style.display = 'none';
        }
        else {
          emptyMessage.style.display = 'none';
          merklisteContainer.style.display = 'grid';
        }
      }

      function createProductElement(productId) {
        const product = productsData[productId];
        if (!product) return null;

        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.setAttribute('data-id', productId);

        productElement.innerHTML = `
          <button class="remove-btn"><i class="fas fa-trash"></i> Entfernen</button>
          <img src="${product.image}" alt="${product.name}" class="product-image" />
          <h3>${product.name}</h3>
        `;

        const removeButton = productElement.querySelector('.remove-btn');
        removeButton.addEventListener('click', () => {
          removeFromMerkliste(productId);
          productElement.remove();
          updateEmptyMessage();
        });

        return productElement;
      }

      function removeFromMerkliste(productId) {
        const index = merkliste.indexOf(productId);
        if (index !== -1) {
          merkliste.splice(index, 1);
          localStorage.setItem('merkliste', JSON.stringify(merkliste));
        }
      }

      updateEmptyMessage();

      if (merkliste.length > 0) {
        merkliste.forEach(productId => {
          const productElement = createProductElement(productId);
          if (productElement) {
            merklisteContainer.appendChild(productElement);
          }
        });
      }
    });
  </script>