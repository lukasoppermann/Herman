
const svgIcons = {
  close: <svg className="Icon Icon__Close" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M9.53554 1.40381L10.5962 2.46447L2.46447 10.5962L1.40381 9.53554L9.53554 1.40381Z" /> <path d="M10.5962 9.53554L9.53554 10.5962L1.40381 2.46447L2.46447 1.40381L10.5962 9.53554Z" /></svg>,
  drag: <svg className="Icon Icon__Drag" width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.2 0.199819C1.04237 0.199858 0.8863 0.230944 0.740688 0.291301C0.595076 0.351658 0.462778 0.440105 0.351348 0.551591C0.239917 0.663077 0.151537 0.795419 0.0912527 0.941061C0.0309683 1.0867 -3.9359e-05 1.24279 3.75449e-08 1.40042C3.94341e-05 1.55804 0.031125 1.71412 0.0914821 1.85973C0.151839 2.00534 0.240286 2.13764 0.351772 2.24907C0.463258 2.3605 0.5956 2.44888 0.741242 2.50917C0.886884 2.56945 1.04297 2.60046 1.2006 2.60042C1.51894 2.60034 1.82421 2.4738 2.04925 2.24865C2.2743 2.02349 2.40068 1.71816 2.4006 1.39982C2.40052 1.08148 2.27398 0.77621 2.04883 0.551166C1.82367 0.326123 1.51834 0.199739 1.2 0.199819ZM1.2 3.79982C1.04237 3.79986 0.8863 3.83094 0.740688 3.8913C0.595076 3.95166 0.462778 4.0401 0.351348 4.15159C0.239917 4.26308 0.151537 4.39542 0.0912527 4.54106C0.0309683 4.6867 -3.9359e-05 4.84279 3.75449e-08 5.00042C3.94341e-05 5.15804 0.031125 5.31412 0.0914821 5.45973C0.151839 5.60534 0.240286 5.73764 0.351772 5.84907C0.463258 5.9605 0.5956 6.04888 0.741242 6.10917C0.886884 6.16945 1.04297 6.20046 1.2006 6.20042C1.51894 6.20034 1.82421 6.0738 2.04925 5.84865C2.2743 5.62349 2.40068 5.31816 2.4006 4.99982C2.40052 4.68148 2.27398 4.37621 2.04883 4.15117C1.82367 3.92612 1.51834 3.79974 1.2 3.79982ZM1.2 7.39982C0.881661 7.3999 0.576391 7.52643 0.351348 7.75159C0.126304 7.97675 -7.95274e-05 8.28208 3.75449e-08 8.60042C7.96025e-05 8.91876 0.126616 9.22403 0.351772 9.44907C0.576928 9.67411 0.882261 9.8005 1.2006 9.80042C1.51894 9.80034 1.82421 9.6738 2.04925 9.44865C2.2743 9.22349 2.40068 8.91816 2.4006 8.59982C2.40052 8.28148 2.27398 7.97621 2.04883 7.75117C1.82367 7.52612 1.51834 7.39974 1.2 7.39982ZM4.8 2.59982C4.95763 2.59978 5.1137 2.56869 5.25931 2.50834C5.40492 2.44798 5.53722 2.35953 5.64865 2.24805C5.76008 2.13656 5.84846 2.00422 5.90875 1.85858C5.96903 1.71293 6.00004 1.55684 6 1.39922C5.99996 1.24159 5.96887 1.08552 5.90852 0.939907C5.84816 0.794295 5.75971 0.661997 5.64823 0.550566C5.53674 0.439136 5.4044 0.350756 5.25876 0.290471C5.11312 0.230187 4.95703 0.199179 4.7994 0.199219C4.48106 0.199298 4.17579 0.325834 3.95075 0.550991C3.7257 0.776147 3.59932 1.08148 3.5994 1.39982C3.59948 1.71816 3.72602 2.02343 3.95117 2.24847C4.17633 2.47351 4.48166 2.5999 4.8 2.59982ZM4.8 3.79982C4.64237 3.79986 4.4863 3.83094 4.34069 3.8913C4.19508 3.95166 4.06278 4.0401 3.95135 4.15159C3.83992 4.26308 3.75154 4.39542 3.69125 4.54106C3.63097 4.6867 3.59996 4.84279 3.6 5.00042C3.60004 5.15804 3.63113 5.31412 3.69148 5.45973C3.75184 5.60534 3.84029 5.73764 3.95177 5.84907C4.06326 5.9605 4.1956 6.04888 4.34124 6.10917C4.48688 6.16945 4.64297 6.20046 4.8006 6.20042C5.11894 6.20034 5.42421 6.0738 5.64925 5.84865C5.8743 5.62349 6.00068 5.31816 6.0006 4.99982C6.00052 4.68148 5.87398 4.37621 5.64883 4.15117C5.42367 3.92612 5.11834 3.79974 4.8 3.79982ZM4.8 7.39982C4.48166 7.3999 4.17639 7.52643 3.95135 7.75159C3.83992 7.86308 3.75154 7.99542 3.69125 8.14106C3.63097 8.2867 3.59996 8.44279 3.6 8.60042C3.60004 8.75804 3.63113 8.91412 3.69148 9.05973C3.75184 9.20534 3.84029 9.33764 3.95177 9.44907C4.17693 9.67411 4.48226 9.8005 4.8006 9.80042C5.11894 9.80034 5.42421 9.6738 5.64925 9.44865C5.8743 9.22349 6.00068 8.91816 6.0006 8.59982C6.00052 8.28148 5.87398 7.97621 5.64883 7.75117C5.42367 7.52612 5.11834 7.39974 4.8 7.39982Z"/></svg>
} as const


export const Icon = ({ name }: { name: keyof typeof svgIcons }) => {
    return svgIcons[name]
}