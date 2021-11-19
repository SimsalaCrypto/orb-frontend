import { Networks } from './blockchain';

const POLYGON_MAINNET = {
  sCLAM_ADDRESS: '0x3949F058238563803b5971711Ad19551930C8209',
  CLAM_ADDRESS: '0x4d6A30EFBE2e9D7A9C143Fce1C5Bb30d9312A465',
  MAI_ADDRESS: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
  TREASURY_ADDRESS: '0xab328Ca61599974b0f577d1F8AB0129f2842d765',
  CLAM_BONDING_CALC_ADDRESS: '0x47655e27667E5B4EC9EB70799f281524d031381c',
  STAKING_ADDRESS: '0xcF2A11937A906e09EbCb8B638309Ae8612850dBf',
  STAKING_HELPER_ADDRESS: '0x22F587EcF472670c61aa4715d0b76D2fa40A9798',
  RESERVES: {
    MAI: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
    MAI_CLAM: '0x8094f4C9a4C8AD1FF4c6688d07Bd90f996C7CA21',
  },
  BONDS: {
    MAI: '0x28077992bFA9609Ae27458A766470b03D43dEe8A',
    MAI_CLAM: '0x79B47c03B02019Af78Ee0de9B0b3Ac0786338a0d',
    MAI_CLAM_V2: '0x64c766f9A4936c3a4b51C55Ea5C4854E19766035',
  },
  IDO: '0x7f637ea843405dff10592f894292a8f1188166f9',
  CLAM_CIRCULATING_SUPPLY: '0x44e02675b5ed5b5df43c04c38f550605949b68c4',
};

const POLYGON_MUMBAI = {
  sCLAM_ADDRESS: '0x5076BCe2F331963DecfC105995332DD9a8117C12',
  CLAM_ADDRESS: '0x858D2A7c8700ecB2513615C71f454C6979D02576',
  MAI_ADDRESS: '0x19907af68A173080c3e05bb53932B0ED541f6d20',
  TREASURY_ADDRESS: '0x54bb038b1A284659E2B050F0F9C28455D1c2Cd53',
  CLAM_BONDING_CALC_ADDRESS: '0xcc70f43050f0716092042F128f9A478D23a1b4b7',
  STAKING_ADDRESS: '0xDe1DC58Db40c628E9C64E3fbEf80aE9D4C2FDfC4',
  STAKING_HELPER_ADDRESS: '0xc34293eD2AE2A7BBC2B111397bAd84D48266608A',
  RESERVES: {
    MAI: '0x19907af68A173080c3e05bb53932B0ED541f6d20',
    MAI_CLAM: '0x9FAf2ad7F8927981E4c8f6087ebc7e339e5a2219',
  },
  BONDS: {
    MAI: '0x62E83bfB165A8af1A5afa72e6B2F341B28F07e54',
    MAI_CLAM: '0x0a011089fad0FAd19B95cCAaD46d26c6fd3d5c93',
    MAI_CLAM_V2: '0x0a011089fad0FAd19B95cCAaD46d26c6fd3d5c93',
  },
  IDO: '0x4Ab1cC06Bd51E948AceBFf40Daaa33292bD06B4D',
  CLAM_CIRCULATING_SUPPLY: '0x44e02675b5ed5b5df43c04c38f550605949b68c4',
};

export const getAddresses = (networkID: number) => {
  if (networkID === Networks.POLYGON_MAINNET) return POLYGON_MAINNET;
  if (networkID === Networks.POLYGON_MUMBAI) return POLYGON_MUMBAI;

  throw new Error("Network don't support");
};
