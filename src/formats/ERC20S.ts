"use client"
import { ERC20SPremint, ERC20SMintable, ERC20SVotes, ERC20SPauseable, ERC20SAccessControl, ERC20SBurnable, ERC20SUpgradeability, ERC20SFlashMinting, ERC20SUpgradeabilityTransparent, ERC20SUpgradeabilityUUPS, ERC20SAccessControlRoles, ERC20SAccessControlOwnable, ERC20SAccessControlManaged } from "../store/ERC20S";
import {ERC20SCode} from '../code/ERC20S';
import { useRecoilState } from "recoil";

export const License = ERC20SCode.filter(code => code.section === "license" ).map(filteredCode => filteredCode.content);
export const Compatibility = ERC20SCode.filter(code => code.section === "compatibility").map(filteredCode => filteredCode.content);
export const CodeVersion = ERC20SCode.filter(code => code.section === "codeVersion").map(filteredCode => filteredCode.content);
export const StartUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "DefaultStart").map(filteredCode => filteredCode.content);
export const BurnableUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
export const PausableUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
export const FlashMintingUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);
export const PermitUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Permit").map(filteredCode => filteredCode.content);
export const VotesUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Votes").map(filteredCode => filteredCode.content);
export const OwnableUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
export const RolesUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Roles").map(filteredCode => filteredCode.content);
export const ManagedUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "Managed").map(filteredCode => filteredCode.content);
export const EndUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "DefaultEnd").map(filteredCode => filteredCode.content);
export const UUPSUpgradeableImport = ERC20SCode.filter(code => code.section === "upgradeableImports" && code.tag === "UUPS").map(filteredCode => filteredCode.content);
export const Import = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Default").map(filteredCode => filteredCode.content);
export const BurnableImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
export const PausableImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
export const FlashMintingImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);
export const PermitImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Permit").map(filteredCode => filteredCode.content);
export const VotesImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Votes").map(filteredCode => filteredCode.content);
export const OwnableImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
export const RolesImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Roles").map(filteredCode => filteredCode.content);
export const ManagedImport = ERC20SCode.filter(code => code.section === "Imports" && code.tag === "Managed").map(filteredCode => filteredCode.content);
export const SecurityContact = ERC20SCode.filter(code => code.section === "SecurityContact").map(filteredCode => filteredCode.content);
export const ContractHeader = ERC20SCode.filter(code => code.section === "ContractHeader").map(filteredCode => filteredCode.content);
export const ContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Default").map(filteredCode => filteredCode.content);
export const OwnableContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
export const RolesContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Roles").map(filteredCode => filteredCode.content);
export const ManagedContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Managed").map(filteredCode => filteredCode.content);
export const BurnableContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
export const PausableContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
export const VotesContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Votes").map(filteredCode => filteredCode.content);
export const PermitContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "Permit").map(filteredCode => filteredCode.content);
export const FlashMintContractName = ERC20SCode.filter(code => code.section === "ContractNames" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);
export const UpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Default").map(filteredCode => filteredCode.content);
export const OwnableUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
export const RolesUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Roles").map(filteredCode => filteredCode.content);
export const ManagedUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Managed").map(filteredCode => filteredCode.content);
export const BurnableUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
export const PermitUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Permit").map(filteredCode => filteredCode.content);
export const VotesUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Votes").map(filteredCode => filteredCode.content);
export const PausableUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
export const FlashMintUpgradeableContractName = ERC20SCode.filter(code => code.section === "upgradeableContractNames" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);
export const RolesByte = ERC20SCode.filter(code => code.section === "RolesByte").map(filteredCode => filteredCode.content);
export const PermitConstructor = ERC20SCode.filter(code => code.section === "Constructor" && code.tag === "Permit").map(filteredCode => filteredCode.content);
export const OwnableConstructor = ERC20SCode.filter(code => code.section === "Constructor" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
export const RolesConstructor = ERC20SCode.filter(code => code.section === "Constructor" && code.tag === "Roles").map(filteredCode => filteredCode.content);
export const ManagedConstructor = ERC20SCode.filter(code => code.section === "Constructor" && code.tag === "Managed").map(filteredCode => filteredCode.content);
export const UpgradeableConstructor = ERC20SCode.filter(code => code.section === "upgradeableConstructor").map(filteredCode => filteredCode.content);
export const MintableSection2 = ERC20SCode.filter(code => code.section === "Section2" && code.tag === "Mintable").map(filteredCode => filteredCode.content);
export const PausableSection2 = ERC20SCode.filter(code => code.section === "Section2" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
export const UUPSSection2 = ERC20SCode.filter(code => code.section === "Section2" && code.tag === "UUPS").map(filteredCode => filteredCode.content);
export const PausableSection3 = ERC20SCode.filter(code => code.section === "Section3" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
export const VotesSection3 = ERC20SCode.filter(code => code.section === "Section3" && code.tag === "Votes").map(filteredCode => filteredCode.content);
export const Section1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Default").map(filteredCode => filteredCode.content);
export const OwnableSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Ownable").map(filteredCode => filteredCode.content);
export const RolesSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Roles").map(filteredCode => filteredCode.content);
export const ManagedSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Managed").map(filteredCode => filteredCode.content);
export const BurnableSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Burnable").map(filteredCode => filteredCode.content);
export const PausableSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Pausable").map(filteredCode => filteredCode.content);
export const PermitSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Permit").map(filteredCode => filteredCode.content);
export const VotesSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "Votes").map(filteredCode => filteredCode.content);
export const FlashMintingSection1 = ERC20SCode.filter(code => code.section === "upgradeableFunctions" && code.tag === "flashMinting").map(filteredCode => filteredCode.content);