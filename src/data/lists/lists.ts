import { reactive } from 'vue';

import type { IEntity } from '@/shared/interfaces/listTypes'
const listData = reactive<IEntity[]>([
  {
    id: 'd4a5d423-8cd4-42ac-afa0-cf4e80295f3e',
    name: 'List 1',
    childes: [
      {
        id: '6d95af7e-966e-47ac-a648-1916ceed3915',
        name: 'Child 1',
        isChecked: false,
        count: 1,
        color: '#FF4500'
      },
      {
        id: '039e3800-76bd-4acb-98da-94f22126cc25',
        name: 'Child 2',
        isChecked: false,
        count: 2,
        color: '#E6E6FA'
      },
      {
        id: '087226ef-a7c2-428d-91b4-31ef81d8ed81',
        name: 'Child 3',
        isChecked: true,
        count: 3,
        color: '#6A0572'
      },
      {
        id: 'c5dcb309-468e-45a6-ae72-48c71cba4bea',
        name: 'Child 4',
        isChecked: false,
        count: 4,
        color: '#CCCCFF'
      },
      {
        id: '5a0a7ff8-f667-445d-91dc-2e5f917fb5ac',
        name: 'Child 5',
        isChecked: false,
        count: 5,
        color: '#FFD700'
      }
    ],
    state: 'partially_checked'
  },
  {
    id: 'fc28085d-757f-4738-ad2f-dbaaf5159a0f',
    name: 'List 2',
    childes: [
      {
        id: '1ab53157-1728-4bad-893a-82a53c96f066',
        name: 'Child 1',
        isChecked: true,
        count: 19,
        color: '#00A896'
      },
      {
        id: 'a2f86bc3-57e1-4816-876c-22b49fa89a22',
        name: 'Child 2',
        isChecked: true,
        count: 45,
        color: '#FF4500'
      },
      {
        id: 'e1d43454-99ab-49cf-8857-77c3f430d71a',
        name: 'Child 3',
        isChecked: false,
        count: 29,
        color: '#E6E6FA'
      },
      {
        id: '584960d1-8b48-49cd-b065-a20dc754c91e',
        name: 'Child 4',
        isChecked: true,
        count: 49,
        color: '#FF5733'
      },
      {
        id: '6265feb5-c03b-4894-a60b-7099f8ff1727',
        name: 'Child 5',
        isChecked: false,
        count: 0,
        color: '#00A896'
      },
      {
        id: '0d80f3a0-13e5-4a1c-8b59-2ad5f1a184fd',
        name: 'Child 6',
        isChecked: true,
        count: 41,
        color: '#4B0082'
      },
      {
        id: '86e579fb-5ec7-4a4e-9593-c78ef767e902',
        name: 'Child 7',
        isChecked: false,
        count: 24,
        color: '#FFD700'
      }
    ],
    state: 'partially_checked'
  },
  {
    id: 'c7a67e3c-a589-4eb6-8e9c-67c42240a1e9',
    name: 'List 3',
    childes: [
      {
        id: '0f778be1-0ea2-4f4f-8bfe-a3f9a432eeab',
        name: 'Child 1',
        isChecked: false,
        count: 14,
        color: '#4B0082'
      },
      {
        id: '909cb274-c737-468e-ad9c-c23833c52f11',
        name: 'Child 2',
        isChecked: true,
        count: 16,
        color: '#FFD700'
      },
      {
        id: '5337d089-ad6f-4de6-b5d1-1fa2ca72a5e0',
        name: 'Child 3',
        isChecked: true,
        count: 42,
        color: '#00A896'
      },
      {
        id: 'f0846177-68eb-4a90-ac88-ceefc4aa9673',
        name: 'Child 4',
        isChecked: false,
        count: 6,
        color: '#FFD700'
      },
      {
        id: '1709315f-f379-46b9-a7ae-3c521311dd39',
        name: 'Child 5',
        isChecked: true,
        count: 15,
        color: '#CCCCFF'
      },
      {
        id: '78217085-b279-448a-84d6-e6d63c409383',
        name: 'Child 6',
        isChecked: false,
        count: 25,
        color: '#00A896'
      }
    ],
    state: 'partially_checked'
  },
  {
    id: 'cd7ad821-da43-4bbe-820b-bb68bcb72de8',
    name: 'List 4',
    childes: [
      {
        id: '5e5bca7b-d57d-4394-b012-5475303bed93',
        name: 'Child 1',
        isChecked: true,
        count: 36,
        color: '#CCCCFF'
      },
      {
        id: 'a1956f3e-3e35-410d-b36b-9e7f6489f255',
        name: 'Child 2',
        isChecked: true,
        count: 6,
        color: '#FFD700'
      },
      {
        id: '743c00a2-26a9-4bda-84f8-484a9f28b399',
        name: 'Child 3',
        isChecked: true,
        count: 4,
        color: '#00A896'
      },
      {
        id: '59ded44a-79ea-4888-943a-867173b298ee',
        name: 'Child 4',
        isChecked: false,
        count: 41,
        color: '#FF5733'
      },
      {
        id: '27ed2cf1-19de-43b3-9bcb-365159b5679b',
        name: 'Child 5',
        isChecked: true,
        count: 47,
        color: '#008000'
      },
      {
        id: '40cdf818-0b7c-4819-804f-fb0bb285b1a6',
        name: 'Child 6',
        isChecked: false,
        count: 8,
        color: '#FFD700'
      },
      {
        id: 'a486d6ae-bac7-464b-b4dd-80f92662f6b3',
        name: 'Child 7',
        isChecked: false,
        count: 20,
        color: '#008000'
      },
      {
        id: '9db83bb9-fc5a-4acd-b532-1cebc40e922c',
        name: 'Child 8',
        isChecked: true,
        count: 11,
        color: '#FFD700'
      }
    ],
    state: 'partially_checked'
  },
  {
    id: '507f89bd-cc7d-4d8d-9b4c-51863d1cd8e4',
    name: 'List 5',
    childes: [
      {
        id: '591ec1d0-e5d8-4ab8-abe6-d8a5498b2bb4',
        name: 'Child 1',
        isChecked: false,
        count: 42,
        color: '#6A0572'
      },
      {
        id: 'ad30fed9-d3b1-48bd-a59e-9597cd4d3970',
        name: 'Child 2',
        isChecked: false,
        count: 6,
        color: '#FF5733'
      },
      {
        id: '45d73d84-a893-487e-b8c4-f336b5e01844',
        name: 'Child 3',
        isChecked: true,
        count: 21,
        color: '#E6E6FA'
      },
      {
        id: '5b51ec6f-bb9b-47f7-8535-e35f6e85c9c1',
        name: 'Child 4',
        isChecked: true,
        count: 20,
        color: '#4B0082'
      }
    ],
    state: 'partially_checked'
  }
])
export default listData;
