<template>
    <div class="container-fluid">
        <!-- Timeline -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-5">Application Status</h4>
                        <div class="hori-timeline" dir="ltr">
                            <ul class="list-inline events">
                                <li
                                    class="list-inline-item event-list"
                                    v-for="milestone in milestones"
                                    :key="milestone.id"
                                >
                                    <div class="px-4">
                                        <div class="event-icon" :class="milestone.completed ? 'green-icon' : 'red-icon'">
                                            <i :class="milestone.completed ? 'fa fa-check text-white' : 'fa fa-times text-white'"></i>
                                        </div>
                                        <h5 class="font-size-16">{{ milestone.title }}</h5>
                                        <p class="text-muted">{{ milestone.description }}</p>
                                        <!-- <div>
                                            <a href="#" class="btn btn-primary btn-sm">Details</a>
                                        </div> -->
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Account Details -->
        <div class="d-flex justify-content-center align-items-center" style="min-height: 50vh;">
            <div class="col-xl-8">
                <div class="card mb-4">
                 <div class="card-header h3">Application Details</div>
                <div class="card-body">
                <form>
                <!-- Program -->
                <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                    <label class="form-label">Program</label>
                    <input class="form-control" type="text" :value="customFieldOptionsMap['4b2a327135377aec0aaac4d9778f73a0c95576da'][deal['4b2a327135377aec0aaac4d9778f73a0c95576da']] || ''" readonly>
                </div>
                <!-- Expected Start Date -->
                <div class="col-md-6">
                    <label class="form-label">Expected Start Date</label>
                    <input class="form-control" type="text" :value="customFieldOptionsMap['ddb6656c58ac42628cc8ff3a66229c2b066e5532'][deal['ddb6656c58ac42628cc8ff3a66229c2b066e5532']] || ''" readonly>
                </div>
            </div>
                <!-- First Name and Last Name -->
                <div class="row gx-3 mb-3">
                    <div class="col-md-12">
                    <label class="form-label">Full Name</label>
                    <input class="form-control" type="text" :value="deal.person_name" readonly>
                    </div>
                </div>
                <!-- Email -->
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input class="form-control" type="email" :value="deal.person_id && deal.person_id.email && deal.person_id.email[0] ? deal.person_id.email[0].value : ''" readonly>
                </div>
                <!-- Phone and Birthday -->
                <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                    <label class="form-label">Phone Number</label>
                    <input class="form-control" type="tel"  :value="deal.person_id && deal.person_id.phone && deal.person_id.phone[0] ? deal.person_id.phone[0].value : ''" readonly>
                    </div>
                    <div class="col-md-6">
                    <label class="form-label">Birthday</label>
                    <input class="form-control" type="text" :value="deal['9ccc8a7da481c2a115e3abcc860fa60be79c0675'] || ''" readonly>
                    </div>
                </div>
                <!-- Address -->
                <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                    <label class="form-label">Address</label>
                    <input class="form-control" type="text" :value="deal['c8e385eccdfd6371b0bf400f3da33f1026aef883'] || ''" readonly>
                    </div>
                    <div class="col-md-6">
                    <label class="form-label">City</label>
                    <input class="form-control" type="text" :value="deal['b1111b880971709af04235f2ae1d969cf1fb63a4'] || ''" readonly>

                    </div>
                </div>
                <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                    <label class="form-label">State</label>
                    <input class="form-control" type="text" :value="deal['db198da6c71d28529b717ce239ff49e277512b65'] || ''" readonly>

                    </div>
                    <div class="col-md-6">
                    <label class="form-label">Country</label>
                    <input class="form-control" type="text" :value="deal['f96194b9a53e2721df1f30f0b8a3c144bf04dabf'] || ''" readonly>

                    </div>
                </div>
                </form>
  </div>
</div>

            </div>
        </div>
    </div>
</template>

  
  <script>

import { getDealDetails } from "../services/pipedriveService"; // Importa la función para obtener detalles del deal
import { mapGetters } from 'vuex';

  export default {
    name: "ApplicationStatus",
    props: {
    dealId: {
      type: String,
      required: true,
    },
  },
    data() {
      return {
        deal: {}, // Aquí almacenaremos los datos del deal
        customFieldOptionsMap: {
            "4b2a327135377aec0aaac4d9778f73a0c95576da": { // Program
                33: "Atlantis Language Institute (English)"
            },
            "21ec7adff26b8263aa5cff796e1f0a8969e05b5f": { // Information Reviewed
                53: "Pending",
                54: "In Progress",
                55: "Completed"
            },
            "b38d15fe76c6527d206d9939361af1815029f78e": { // Documents Reviewed
                56: "Pending",
                57: "In Progress",
                58: "Completed"
            },
            "9df76fe779b5a8a48eb41859bf4afe7b83ec8d88": { // Payment Completed
                59: "Pending",
                60: "Completed"
            },
            "9c76ce8681c602b24566065962a3b11f11225f07": { // Document Submitted
                46: "No",
                47: "Yes"
            },
            "ddb6656c58ac42628cc8ff3a66229c2b066e5532": { // Expected Start Date
                48: "Winter 01/13/25 - 05/04/25",
                49: "Summer 05/12/25 - 08/31/25",
                50: "Fall 09/01/25 - 12/21/25"
            },
            "59": { // Communications
                51: "Auto",
                52: "Manual"
            },
            "43": { // Language
                31: "English",
                32: "Spanish"
            },
            "11": { // Label
                39: "HOT",
                40: "WARM",
                41: "COLD"
            },
            "56": { // Notes
                42: "Click enlace de correo",
                43: "Responde msg Whatsapp",
                44: "Responde Correo",
                45: "Multiples envio Formulario"
            }
        },

        milestones: [
          {
            id: 1,
            date: "2025-01-01",
            title: "Information Submitted",
            description: "The student has submitted the application information.",
            statusClass: "bg-soft-primary text-primary",
            completed: false
          },
          {
            id: 2,
            date: "2025-01-03",
            title: "Documents Uploaded",
            description: "The student has uploaded all required documents.",
            statusClass: "bg-soft-success text-success",
            completed:false
          },
          {
            id: 3,
            date: "2025-01-05",
            title: "Payment Completed",
            description: "The payment for the application has been successfully processed.",
            statusClass: "bg-soft-warning text-warning",
            completed:false
          },
          {
            id: 4,
            date: "2025-01-07",
            title: "Application Reviewed",
            description: "The application has been reviewed by the admissions team.",
            statusClass: "bg-soft-danger text-danger",
            completed:false
          },
        ],
        
      };
      
    },
    watch: {
        deal: {
            immediate: true,
            handler(newDeal) {
            this.milestones[0].completed = newDeal['21ec7adff26b8263aa5cff796e1f0a8969e05b5f'] !== "53";
            this.milestones[1].completed = newDeal['b38d15fe76c6527d206d9939361af1815029f78e'] !== "56";
            this.milestones[2].completed = newDeal['9df76fe779b5a8a48eb41859bf4afe7b83ec8d88'] !== "59";
            },
        },
    },

    mounted() {
    // Capturamos el ID del deal desde la URL
    console.log("Prop dealId recibida:", this.dealId);
    console.log(this.deal);
    if (!this.dealId) {
      console.error("Error: 'dealId' no está definido.");
      return;
    }

    // Simulamos datos o hacemos una llamada al backend
    this.fetchDealDetails();
  },
  computed: {
        ...mapGetters(['getFieldMapping']), // Accede al mapeo de campos desde Vuex
        
    },
  methods: {
    async fetchDealDetails() {
        try {
      const response = await getDealDetails(this.dealId);
      this.deal = response.data.data; // Asigna los datos obtenidos del API
     } catch (error) {
      console.error("Error al obtener los detalles del deal:", error);
     }
    },
  },
  };
  
  </script>
  
  <style scoped>
  /* Estilos de la línea de tiempo */
  body {
    background: #eee;
    margin-top: 20px;
  }
  .hori-timeline .events {
    border-top: 3px solid #e9ecef;
  }
  .hori-timeline .events .event-list {
    display: block;
    position: relative;
    text-align: center;
    padding-top: 70px;
    margin-right: 0;
  }
  .hori-timeline .events .event-list:before {
    content: "";
    position: absolute;
    height: 36px;
    border-right: 2px dashed #dee2e6;
    top: 0;
  }
  .hori-timeline .events .event-list .event-date {
    position: absolute;
    top: 38px;
    left: 0;
    right: 0;
    width: 75px;
    margin: 0 auto;
    border-radius: 4px;
    padding: 2px 4px;
  }
  @media (min-width: 1140px) {
    .hori-timeline .events .event-list {
      display: inline-block;
      width: 24%;
      padding-top: 45px;
    }
    .hori-timeline .events .event-list .event-date {
      top: -12px;
    }
  }
  
  .card {
    border: none;
    margin-bottom: 24px;
    -webkit-box-shadow: 0 0 13px 0 rgba(236, 236, 241, 0.44);
    box-shadow: 0 0 13px 0 rgba(236, 236, 241, 0.44);
  }

  .event-icon {
  position: absolute;
  top: -25px; /* Ajusta según sea necesario */
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.green-icon {
  background-color: #28a745; /* Verde para completados */
}

.red-icon {
  background-color: #dc3545; /* Rojo para incompletos */
}

.event-icon .fa-check {
  color: #fff; /* Blanco para el check */
  font-size: 20px;
}

.event-icon .fa-times {
  color: #fff; /* Blanco para la cruz */
  font-size: 20px;
}


.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
    border-radius: 0.35rem;
    background-color: #fff;
}

.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
    font-weight: 500;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.875rem 1.125rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: #69707a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c5ccd6;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
    background-color: #0061f2;
    border-color: #0061f2;
    color: #fff;
}

.btn-primary:hover {
    background-color: #0051c7;
    border-color: #0051c7;
}

.form-label {
    text-align: left; /* Alinea el texto de las etiquetas a la izquierda */
    display: block; /* Asegúrate de que las etiquetas ocupen toda la línea */
    font-weight: bold; /* Opcional: para resaltar las etiquetas */
    margin-bottom: 0.5rem; /* Opcional: separa las etiquetas de los campos */
}


  </style>
  